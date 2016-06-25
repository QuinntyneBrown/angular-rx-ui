describe("carouselActionPanel", function () {
    var carouselActionPanelComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.carouselActionPanel");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        carouselActionPanelComponent = $controller("carouselActionPanelComponent", { carouselActionPanelActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<carousel-action-panel></carousel-action-panel>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(carouselActionPanelComponent).toBeDefined();
    });
});
//# sourceMappingURL=carousel-action-panel.component.spec.js.map