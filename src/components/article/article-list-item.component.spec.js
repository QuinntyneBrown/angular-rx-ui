describe("articleListItem", function () {
    var articleListItemComponent;
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
        articleListItemComponent = $controller("articleListItemComponent", { articleListItemActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-list-item></article-list-item>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleListItemComponent).toBeDefined();
    });
});
//# sourceMappingURL=article-list-item.component.spec.js.map