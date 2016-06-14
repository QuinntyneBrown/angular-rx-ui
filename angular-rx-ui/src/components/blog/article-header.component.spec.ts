describe("articleHeader", () => {

    var articleHeaderComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.articleHeader");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleHeaderComponent = $controller("articleHeaderComponent", { articleHeaderActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<article-header></article-header>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(articleHeaderComponent).toBeDefined();
    });
})
