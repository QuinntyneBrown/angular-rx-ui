import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { TabsActionCreator } from "./tabs.action-creator";

@Component({
    template: require("./tab-content.component.html"),
    styles: [require("./tab-content.component.scss")],
    selector: "tab-content",
    transclude: true,
    viewProviders: ["tabsActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabContentComponent {
    constructor(private _tabsActionCreator: TabsActionCreator) { }
    storeOnChange = state => { }
    ngOnInit = () => this._tabsActionCreator.tabChildLoaded();
}