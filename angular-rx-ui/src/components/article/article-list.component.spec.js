describe("articleList", function () {
    var articleListComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.article");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleListComponent = $controller("articleListComponent", { articleListActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-list></article-list>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleListComponent).toBeDefined();
    });
});
//# sourceMappingURL=article-list.component.spec.js.map