describe("articleDetail", function () {
    var articleDetailComponent;
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
        articleDetailComponent = $controller("articleDetailComponent", { articleDetailActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-detail></article-detail>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleDetailComponent).toBeDefined();
    });
});
//# sourceMappingURL=article-detail.component.spec.js.map