describe("articleSocialShare", function () {
    var articleSocialShareComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.blog");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleSocialShareComponent = $controller("articleSocialShareComponent", { articleSocialShareActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-social-share></article-social-share>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleSocialShareComponent).toBeDefined();
    });
});
//# sourceMappingURL=article-social-share.component.spec.js.map