@core.Component({
    selector: "app",
    template: "<div><counter></counter></div>"
})
class AppComponent { }

var counterDemoApp = (<any>angular.module("counterDemoApp", [
    "app.counter"
]));

counterDemoApp.component(AppComponent);