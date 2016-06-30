describe("hero", () => {

    var heroComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.hero");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        heroComponent = $controller("heroComponent", { heroActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<hero></hero>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(heroComponent).toBeDefined();
    });
})
