describe("navMenu", () => {

    var navMenuComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.navMenu");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        navMenuComponent = $controller("navMenuComponent", { navMenuActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<nav-menu></nav-menu>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(navMenuComponent).toBeDefined();
    });
})
