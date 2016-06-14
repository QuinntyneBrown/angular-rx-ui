describe("blogListItem", function () {
    var blogListItemComponent;
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
        blogListItemComponent = $controller("blogListItemComponent", { blogListItemActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<blog-list-item></blog-list-item>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(blogListItemComponent).toBeDefined();
    });
});
//# sourceMappingURL=blog-list-item.component.spec.js.map