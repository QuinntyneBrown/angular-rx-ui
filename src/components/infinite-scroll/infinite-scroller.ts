// Port: https://github.com/GoogleChrome/ui-element-samples/blob/gh-pages/infinite-scroller/scripts/infinite-scroll.js

import { InfiniteScrollerSource } from "./infinite-scroller-source";

export class InfiniteScroller {
    constructor(private scroller, private source: InfiniteScrollerSource) {

    }

    private anchorItem = { index: 0, offset: 0 };
}