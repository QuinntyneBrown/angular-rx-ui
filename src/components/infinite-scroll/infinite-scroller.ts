// Port: https://github.com/GoogleChrome/ui-element-samples/blob/gh-pages/infinite-scroller/scripts/infinite-scroll.js

import { InfiniteScrollerSource } from "./infinite-scroller-source";

// Number of items to instantiate beyond current view in the scroll direction.
const RUNWAY_ITEMS = 50;

// Number of items to instantiate beyond current view in the opposite direction.
const RUNWAY_ITEMS_OPPOSITE = 10;

// The number of pixels of additional length to allow scrolling to.
const SCROLL_RUNWAY = 2000;

// The animation interval (in ms) for fading in content from tombstones.
const ANIMATION_DURATION_MS = 200;

export class InfiniteScroller {
    constructor(private $window: angular.IWindowService, private scroller, private source: InfiniteScrollerSource) {
        scroller.addEventListener('scroll', this.onScroll);
        $window.addEventListener('resize', this.onResize);
        scroller.appendChild(this.scrollRunway);
        this.onResize();
    }

    private anchorItem = { index: 0, offset: 0 };
    private firstAttachedItem = 0;
    private lastAttachedItem = 0;
    private anchorScrollTop = 0;
    private tombstoneSize = 0;
    private tombstoneWidth = 0;
    private tombstones = [];
    private items = [];
    private loadedItems = 0;
    private requestInProgress = false;

    public onScroll = () => {
        var delta = this.scroller.scrollTop - this.anchorScrollTop;
        // Special case, if we get to very top, always scroll to top.
        if (this.scroller.scrollTop == 0) {
            this.anchorItem = { index: 0, offset: 0 };
        } else {
            this.anchorItem = this.calculateAnchoredItem(this.anchorItem, delta);
        }
        this.anchorScrollTop = this.scroller.scrollTop;
        var lastScreenItem = this.calculateAnchoredItem(this.anchorItem, this.scroller.offsetHeight);
        if (delta < 0)
            this.fill(this.anchorItem.index - RUNWAY_ITEMS, lastScreenItem.index + RUNWAY_ITEMS_OPPOSITE);
        else
            this.fill(this.anchorItem.index - RUNWAY_ITEMS_OPPOSITE, lastScreenItem.index + RUNWAY_ITEMS);
    }

    private calculateAnchoredItem = (initialAnchor, delta) => {
        if (delta == 0)
            return initialAnchor;
        delta += initialAnchor.offset;
        var i = initialAnchor.index;
        var tombstones = 0;
        if (delta < 0) {
            while (delta < 0 && i > 0 && this.items[i - 1].height) {
                delta += this.items[i - 1].height;
                i--;
            }
            tombstones = Math.max(-i, Math.ceil(Math.min(delta, 0) / this.tombstoneSize));
        } else {
            while (delta > 0 && i < this.items.length && this.items[i].height && this.items[i].height < delta) {
                delta -= this.items[i].height;
                i++;
            }
            if (i >= this.items.length || !this.items[i].height)
                tombstones = Math.floor(Math.max(delta, 0) / this.tombstoneSize);
        }
        i += tombstones;
        delta -= tombstones * this.tombstoneSize;
        return {
            index: i,
            offset: delta,
        };
    }

    public fill = (start, end) => {
        this.firstAttachedItem = Math.max(0, start);
        this.lastAttachedItem = end;
        this.attachContent();
    }

    public onResize = () => {
        var tombstone = this.source.createTombstone();
        tombstone.style.position = 'absolute';
        this.scroller.appendChild(tombstone);
        tombstone.classList.remove('invisible');
        this.tombstoneSize_ = tombstone.offsetHeight;
        this.tombstoneWidth_ = tombstone.offsetWidth;
        this.scroller_.removeChild(tombstone);

        // Reset the cached size of items in the scroller as they may no longer be
        // correct after the item content undergoes layout.
        for (var i = 0; i < this.items_.length; i++) {
            this.items_[i].height = this.items_[i].width = 0;
        }
        this.onScroll();
    }

    private _scrollRunway: HTMLDivElement;

    private get scrollRunway() {
        if (this._scrollRunway)
            return this._scrollRunway;

        this._scrollRunway.textContent = ' ';
        this._scrollRunway = document.createElement('div');
        this._scrollRunway.style.position = 'absolute';
        this._scrollRunway.style.height = '1px';
        this._scrollRunway.style.width = '1px';
        this._scrollRunway.style.transition = 'transform 0.2s';
        return this._scrollRunway;
    }

    private scrollRunwayEnd = 0;

    private attachContent = () => {
        // Collect nodes which will no longer be rendered for reuse.
        // TODO: Limit this based on the change in visible items rather than looping
        // over all items.
        var i;
        var unusedNodes = [];
        for (i = 0; i < this.items.length; i++) {
            // Skip the items which should be visible.
            if (i == this.firstAttachedItem) {
                i = this.lastAttachedItem - 1;
                continue;
            }
            if (this.items[i].node) {
                if (this.items[i].node.classList.contains('tombstone')) {
                    this.tombstones.push(this.items[i].node);
                    this.tombstones[this.tombstones.length - 1].classList.add('invisible');
                } else {
                    unusedNodes.push(this.items[i].node);
                }
            }
            this.items[i].node = null;
        }

        var tombstoneAnimations = {};
        // Create DOM nodes.
        for (i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
            while (this.items_.length <= i)
                this.addItem_();
            if (this.items_[i].node) {
                // if it's a tombstone but we have data, replace it.
                if (this.items_[i].node.classList.contains('tombstone') &&
                    this.items_[i].data) {
                    // TODO: Probably best to move items on top of tombstones and fade them in instead.
                    if (ANIMATION_DURATION_MS) {
                        this.items_[i].node.style.zIndex = 1;
                        tombstoneAnimations[i] = [this.items_[i].node, this.items_[i].top - this.anchorScrollTop];
                    } else {
                        this.items_[i].node.classList.add('invisible');
                        this.tombstones_.push(this.items_[i].node);
                    }
                    this.items_[i].node = null;
                } else {
                    continue;
                }
            }
            var node = this.items_[i].data ? this.source_.render(this.items_[i].data, unusedNodes.pop()) : this.getTombstone();
            // Maybe don't do this if it's already attached?
            node.style.position = 'absolute';
            this.items_[i].top = -1;
            this.scroller_.appendChild(node);
            this.items_[i].node = node;
        }

        // Remove all unused nodes
        while (unusedNodes.length) {
            this.scroller_.removeChild(unusedNodes.pop());
        }

        // Get the height of all nodes which haven't been measured yet.
        for (i = this.firstAttachedItem_; i < this.lastAttachedItem_; i++) {
            // Only cache the height if we have the real contents, not a placeholder.
            if (this.items_[i].data && !this.items_[i].height) {
                this.items_[i].height = this.items_[i].node.offsetHeight;
                this.items_[i].width = this.items_[i].node.offsetWidth;
            }
        }

        // Fix scroll position in case we have realized the heights of elements
        // that we didn't used to know.
        // TODO: We should only need to do this when a height of an item becomes
        // known above.
        this.anchorScrollTop = 0;
        for (i = 0; i < this.anchorItem.index; i++) {
            this.anchorScrollTop += this.items_[i].height || this.tombstoneSize_;
        }
        this.anchorScrollTop += this.anchorItem.offset;

        // Position all nodes.
        var curPos = this.anchorScrollTop - this.anchorItem.offset;
        i = this.anchorItem.index;
        while (i > this.firstAttachedItem_) {
            curPos -= this.items_[i - 1].height || this.tombstoneSize_;
            i--;
        }
        while (i < this.firstAttachedItem_) {
            curPos += this.items_[i].height || this.tombstoneSize_;
            i++;
        }
        // Set up initial positions for animations.
        for (var i in tombstoneAnimations) {
            var anim = tombstoneAnimations[i];
            this.items_[i].node.style.transform = 'translateY(' + (this.anchorScrollTop + anim[1]) + 'px) scale(' + (this.tombstoneWidth_ / this.items_[i].width) + ', ' + (this.tombstoneSize_ / this.items_[i].height) + ')';
            // Call offsetTop on the nodes to be animated to force them to apply current transforms.
            this.items_[i].node.offsetTop;
            anim[0].offsetTop;
            this.items_[i].node.style.transition = 'transform ' + ANIMATION_DURATION_MS + 'ms';
        }
        for (i = this.firstAttachedItem_; i < this.lastAttachedItem_; i++) {
            var anim = tombstoneAnimations[i];
            if (anim) {
                anim[0].style.transition = 'transform ' + ANIMATION_DURATION_MS + 'ms, opacity ' + ANIMATION_DURATION_MS + 'ms';
                anim[0].style.transform = 'translateY(' + curPos + 'px) scale(' + (this.items_[i].width / this.tombstoneWidth_) + ', ' + (this.items_[i].height / this.tombstoneSize_) + ')';
                anim[0].style.opacity = 0;
            }
            if (curPos != this.items_[i].top) {
                if (!anim)
                    this.items_[i].node.style.transition = '';
                this.items_[i].node.style.transform = 'translateY(' + curPos + 'px)';
            }
            this.items_[i].top = curPos;
            curPos += this.items_[i].height || this.tombstoneSize_;
        }

        this.scrollRunwayEnd_ = Math.max(this.scrollRunwayEnd_, curPos + SCROLL_RUNWAY)
        this.scrollRunway_.style.transform = 'translate(0, ' + this.scrollRunwayEnd_ + 'px)';
        this.scroller_.scrollTop = this.anchorScrollTop;

        if (ANIMATION_DURATION_MS) {
            // TODO: Should probably use transition end, but there are a lot of animations we could be listening to.
            setTimeout(function () {
                for (var i in tombstoneAnimations) {
                    var anim = tombstoneAnimations[i];
                    anim[0].classList.add('invisible');
                    this.tombstones_.push(anim[0]);
                    // Tombstone can be recycled now.
                }
            }.bind(this), ANIMATION_DURATION_MS)
        }

        this.maybeRequestContent();

    }
}