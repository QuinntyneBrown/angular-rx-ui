describe("articleAuthor", () => {

    var articleAuthorComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.blog");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleAuthorComponent = $controller("articleAuthorComponent", { articleAuthorActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<article-author></article-author>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(articleAuthorComponent).toBeDefined();
    });
})
