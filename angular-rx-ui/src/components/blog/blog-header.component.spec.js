describe("blogHeader", function () {
    var blogHeaderComponent;
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
        blogHeaderComponent = $controller("blogHeaderComponent", { blogHeaderActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<blog-header></blog-header>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(blogHeaderComponent).toBeDefined();
    });
});
//# sourceMappingURL=blog-header.component.spec.js.map