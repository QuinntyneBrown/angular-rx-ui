describe("ui", () => {

    var uiComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.ui");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        uiComponent = $controller("uiComponent", { uiActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<ui></ui>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(uiComponent).toBeDefined();
    });
})
