describe("articleCategory", () => {

    var articleCategoryComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.articleCategory");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleCategoryComponent = $controller("articleCategoryComponent", { articleCategoryActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<article-category></article-category>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(articleCategoryComponent).toBeDefined();
    });
})
