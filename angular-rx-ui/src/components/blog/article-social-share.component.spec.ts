describe("articleSocialShare", () => {

    var articleSocialShareComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.blog");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleSocialShareComponent = $controller("articleSocialShareComponent", { articleSocialShareActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<article-social-share></article-social-share>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(articleSocialShareComponent).toBeDefined();
    });
})
