//describe("carouselContent", () => {

//    var carouselContentComponent;
//    var $compile;
//    var $rootScope;

//    class MockActionCreator { }

//    beforeEach(() => {
//        angular.mock.module("app.carouselContent");
//    });

//    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
//        $rootScope = _$rootScope_;
//        $compile = _$compile_;
//        carouselContentComponent = $controller("carouselContentComponent", { carouselContentActionCreator: new MockActionCreator() });
//    }));

//    it("should compile", () => {
//        var element = $compile("<carousel-content></carousel-content>")($rootScope);
//        expect(carouselContentComponent).toBeDefined();
//    });

//    it("should be defined", () => {
//        expect(carouselContentComponent).toBeDefined();
//    });
//})
