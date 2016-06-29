describe("featuredTrio", () => {

    var featuredTrioComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.featuredTrio");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        featuredTrioComponent = $controller("featuredTrioComponent", { featuredTrioActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<featured-trio></featured-trio>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(featuredTrioComponent).toBeDefined();
    });
})
