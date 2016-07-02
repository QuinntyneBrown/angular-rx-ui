describe("articleHeader", function () {
    var articleHeaderComponent;
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
        articleHeaderComponent = $controller("articleHeaderComponent", { articleHeaderActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-header></article-header>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleHeaderComponent).toBeDefined();
    });
});
//# sourceMappingURL=article-header.component.spec.js.map