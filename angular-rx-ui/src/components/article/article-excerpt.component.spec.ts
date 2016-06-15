describe("articleExcerpt", () => {

    var articleExcerptComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.article");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleExcerptComponent = $controller("articleExcerptComponent", { articleExcerptActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<article-excerpt></article-excerpt>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(articleExcerptComponent).toBeDefined();
    });
})
