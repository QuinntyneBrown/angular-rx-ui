describe("articleFeaturedImage", () => {

    var articleFeaturedImageComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.articleFeaturedImage");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleFeaturedImageComponent = $controller("articleFeaturedImageComponent", { articleFeaturedImageActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<article-featured-image></article-featured-image>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(articleFeaturedImageComponent).toBeDefined();
    });
})
