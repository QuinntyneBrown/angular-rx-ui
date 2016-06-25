describe("flyout", () => {

    var flyoutComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.flyout");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        flyoutComponent = $controller("flyoutComponent", { flyoutActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<flyout></flyout>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(flyoutComponent).toBeDefined();
    });
})
