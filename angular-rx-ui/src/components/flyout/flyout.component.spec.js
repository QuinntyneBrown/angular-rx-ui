describe("flyout", function () {
    var flyoutComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.flyout");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        flyoutComponent = $controller("flyoutComponent", { flyoutActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<flyout></flyout>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(flyoutComponent).toBeDefined();
    });
});
//# sourceMappingURL=flyout.component.spec.js.map