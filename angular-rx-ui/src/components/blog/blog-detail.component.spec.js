describe("blogDetail", function () {
    var blogDetailComponent;
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
        blogDetailComponent = $controller("blogDetailComponent", { blogDetailActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<blog-detail></blog-detail>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(blogDetailComponent).toBeDefined();
    });
});
//# sourceMappingURL=blog-detail.component.spec.js.map