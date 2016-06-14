describe("blogHeader", () => {

    var blogHeaderComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.blog");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        blogHeaderComponent = $controller("blogHeaderComponent", { blogHeaderActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<blog-header></blog-header>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(blogHeaderComponent).toBeDefined();
    });
})
