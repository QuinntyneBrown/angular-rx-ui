@core.Component({
    selector: "app",
    template: "<div><counter></counter></div>"
})
class AppComponent {

    storeOnChange = state => {
        if (state && state.lastTriggeredByActionType === "counter.increment") {

        }

        if (state && state.lastTriggeredByActionType === "counter.decrement") {

        }
            
    }
}

var counterDemoApp = (<any>angular.module("counterDemoApp", [
    "app.counter"
]));

counterDemoApp.component(AppComponent);