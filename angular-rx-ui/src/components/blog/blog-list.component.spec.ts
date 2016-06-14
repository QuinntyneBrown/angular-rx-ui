describe("blogList", () => {

    var blogListComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.blog");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        blogListComponent = $controller("blogListComponent", { blogListActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<blog-list></blog-list>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(blogListComponent).toBeDefined();
    });
})
