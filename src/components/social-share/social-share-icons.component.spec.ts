describe("socialShareIcons", () => {

    var socialShareIconsComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.socialShare");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        socialShareIconsComponent = $controller("socialShareIconsComponent", { socialShareIconsActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<social-share-icons></social-share-icons>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(socialShareIconsComponent).toBeDefined();
    });
})
