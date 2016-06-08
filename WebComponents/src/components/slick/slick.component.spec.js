describe("slick", function () {
    var slickComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.slick");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        slickComponent = $controller("slickComponent", { $element: {} });
    }));
    it("should compile", function () {
        var element = $compile("<slick></slick>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(slickComponent).toBeDefined();
    });
});
//# sourceMappingURL=slick.component.spec.js.map