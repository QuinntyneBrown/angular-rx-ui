describe("fileExplorer", () => {

    var fileExplorerComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.fileExplorer");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        fileExplorerComponent = $controller("fileExplorerComponent", { fileExplorerActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<file-explorer></file-explorer>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(fileExplorerComponent).toBeDefined();
    });
})
