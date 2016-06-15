describe("articleListItem", () => {

    var articleListItemComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.article");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleListItemComponent = $controller("articleListItemComponent", { articleListItemActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<article-list-item></article-list-item>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(articleListItemComponent).toBeDefined();
    });
})
