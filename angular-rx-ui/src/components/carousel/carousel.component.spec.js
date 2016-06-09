//describe("carousel", () => {
//    var carouselComponent;
//    var $compile;
//    var $rootScope;
//    class MockActionCreator { }
//    beforeEach(() => {
//        angular.mock.module("app.carousel");
//    });
//    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
//        $rootScope = _$rootScope_;
//        $compile = _$compile_;
//        carouselComponent = $controller("carouselComponent", { carouselActionCreator: new MockActionCreator() });
//    }));
//    it("should compile", () => {
//        var element = $compile("<carousel></carousel>")($rootScope);
//        expect(carouselComponent).toBeDefined();
//    });
//    it("should be defined", () => {
//        expect(carouselComponent).toBeDefined();
//    });
//})
//# sourceMappingURL=carousel.component.spec.js.map