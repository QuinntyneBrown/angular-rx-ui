//describe("carouselActionPanel", () => {

//    var carouselActionPanelComponent;
//    var $compile;
//    var $rootScope;

//    class MockActionCreator { }

//    beforeEach(() => {

//        angular.mock.module("app.carouselActionPanel");
//    });

//    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
//        $rootScope = _$rootScope_;
//        $compile = _$compile_;
//        carouselActionPanelComponent = $controller("carouselActionPanelComponent", { carouselActionPanelActionCreator: new MockActionCreator() });
//    }));

//    it("should compile", () => {
//        var element = $compile("<carousel-action-panel></carousel-action-panel>")($rootScope);
//        expect(element).toBeDefined();
//    });

//    it("should be defined", () => {
//        expect(carouselActionPanelComponent).toBeDefined();
//    });
//})
