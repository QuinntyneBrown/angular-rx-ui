describe("articleDetail", () => {

    var articleDetailComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.article");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleDetailComponent = $controller("articleDetailComponent", { articleDetailActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<article-detail></article-detail>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(articleDetailComponent).toBeDefined();
    });
})
