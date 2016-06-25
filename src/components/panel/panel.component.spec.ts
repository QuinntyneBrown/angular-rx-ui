describe("panel", () => {

    var panelComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.panel");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        panelComponent = $controller("panelComponent", { panelActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<panel></panel>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(panelComponent).toBeDefined();
    });
})
