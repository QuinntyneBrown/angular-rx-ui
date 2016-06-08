describe("slick", () => {

    var slickComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.slick");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        slickComponent = $controller("slickComponent", { $element: {}});
    }));

    it("should compile", () => {
        var element = $compile("<slick></slick>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(slickComponent).toBeDefined();
    });
})
