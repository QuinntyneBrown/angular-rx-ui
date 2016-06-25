describe("articleList", () => {

    var articleListComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.article");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleListComponent = $controller("articleListComponent", { articleListActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<article-list></article-list>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(articleListComponent).toBeDefined();
    });
})
