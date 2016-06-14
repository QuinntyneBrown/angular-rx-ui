describe("blogListItem", () => {

    var blogListItemComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.blog");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        blogListItemComponent = $controller("blogListItemComponent", { blogListItemActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<blog-list-item></blog-list-item>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(blogListItemComponent).toBeDefined();
    });
})
