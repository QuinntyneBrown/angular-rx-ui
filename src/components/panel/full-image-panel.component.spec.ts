describe("fullImagePanel", () => {

    var fullImagePanelComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.fullImagePanel");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        fullImagePanelComponent = $controller("fullImagePanelComponent", { fullImagePanelActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<full-image-panel></full-image-panel>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(fullImagePanelComponent).toBeDefined();
    });
})
