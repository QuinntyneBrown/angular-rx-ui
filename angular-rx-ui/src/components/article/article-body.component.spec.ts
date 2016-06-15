describe("articleBody", () => {

    var articleBodyComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.article");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleBodyComponent = $controller("articleBodyComponent", { articleBodyActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<article-body></article-body>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(articleBodyComponent).toBeDefined();
    });
})
