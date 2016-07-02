describe("hero", function () {
    var heroComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.hero");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        heroComponent = $controller("heroComponent", { $element: $compile("<hero></hero>")($rootScope) });
    }));
    it("should compile", function () {
        var element = $compile("<hero></hero>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(heroComponent).toBeDefined();
    });
});
//# sourceMappingURL=hero.component.spec.js.map