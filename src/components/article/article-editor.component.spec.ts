describe("articleEditor", () => {

    var articleEditorComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.article");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleEditorComponent = $controller("articleEditorComponent", { articleEditorActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<article-editor></article-editor>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(articleEditorComponent).toBeDefined();
    });
})
