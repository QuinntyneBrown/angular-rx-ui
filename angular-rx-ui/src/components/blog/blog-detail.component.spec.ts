describe("blogDetail", () => {

    var blogDetailComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.blog");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        blogDetailComponent = $controller("blogDetailComponent", { blogDetailActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<blog-detail></blog-detail>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(blogDetailComponent).toBeDefined();
    });
})
