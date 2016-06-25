describe("panel", function () {
    var panelComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.panel");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        panelComponent = $controller("panelComponent", { panelActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<panel></panel>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(panelComponent).toBeDefined();
    });
});
//# sourceMappingURL=panel.component.spec.js.map