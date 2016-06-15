describe("articleCategoryList", () => {

    var articleCategoryListComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.article");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleCategoryListComponent = $controller("articleCategoryListComponent", { articleCategoryListActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<article-category-list></article-category-list>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(articleCategoryListComponent).toBeDefined();
    });
})
