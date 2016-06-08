@core.Component({
    selector: "app",
    template: "<div><slick></slick></div>"
})
class SlickAppComponent {}

var slickApp = (<any>angular.module("slickApp", [
    "app.slick"
]));

slickApp.component(SlickAppComponent);