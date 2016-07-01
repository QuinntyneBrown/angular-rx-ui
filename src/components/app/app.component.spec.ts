describe("app", () => {

    var appComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.app");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        appComponent = $controller("appComponent", { appActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<app></app>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(appComponent).toBeDefined();
    });
})
