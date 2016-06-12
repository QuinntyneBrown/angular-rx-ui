
@core.Component({
    selector: "app",
    template: "<div><counter></counter></div>"
})
class RotatorAppComponent {

    storeOnChange = state => {


    }
}

var rotatorDemoApp = (<any>angular.module("rotatorDemoApp", [
    "app.counter"
]));

counterDemoApp.component(RotatorAppComponent);