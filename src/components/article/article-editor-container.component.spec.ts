describe("articleEditorContainer", () => {

    var articleEditorContainerComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.article");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleEditorContainerComponent = $controller("articleEditorContainerComponent", { articleEditorContainerActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<article-editor-container></article-editor-container>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(articleEditorContainerComponent).toBeDefined();
    });
})
