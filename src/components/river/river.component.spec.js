describe("river", function () {
    var riverComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.river");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        riverComponent = $controller("riverComponent", { riverActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<river></river>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(riverComponent).toBeDefined();
    });
});
//# sourceMappingURL=river.component.spec.js.map