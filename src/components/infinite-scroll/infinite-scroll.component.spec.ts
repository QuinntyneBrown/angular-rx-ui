describe("infiniteScroll", () => {

    var infiniteScrollComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.infiniteScroll");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        infiniteScrollComponent = $controller("infiniteScrollComponent", { infiniteScrollActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<infinite-scroll></infinite-scroll>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(infiniteScrollComponent).toBeDefined();
    });
})
