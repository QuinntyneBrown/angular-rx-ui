describe("articleAuthor", function () {
    var articleAuthorComponent;
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
        articleAuthorComponent = $controller("articleAuthorComponent", { articleAuthorActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-author></article-author>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleAuthorComponent).toBeDefined();
    });
});
//# sourceMappingURL=article-author.component.spec.js.map