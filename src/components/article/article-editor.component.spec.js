describe("articleEditor", function () {
    var articleEditorComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.article");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleEditorComponent = $controller("articleEditorComponent", { articleEditorActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-editor></article-editor>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleEditorComponent).toBeDefined();
    });
});
//# sourceMappingURL=article-editor.component.spec.js.map