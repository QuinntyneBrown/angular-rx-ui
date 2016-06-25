import { IDispatcher, Service } from "../core";
import { SetCurrentTabAction,TabChildLoadedAction } from "./tabs.actions";

@Service({
    serviceName: "tabsActionCreator",
    viewProviders:["dispatcher"]
})
export class TabsActionCreator {
    constructor(private dispatcher: IDispatcher) { }

    setCurrentTab = options => this.dispatcher.dispatch(new SetCurrentTabAction(options.tabName, options.index));

    tabChildLoaded = () => this.dispatcher.dispatch(new TabChildLoadedAction());
}