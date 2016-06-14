describe("blogList", function () {
    var blogListComponent;
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
        blogListComponent = $controller("blogListComponent", { blogListActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<blog-list></blog-list>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(blogListComponent).toBeDefined();
    });
});
//# sourceMappingURL=blog-list.component.spec.js.map