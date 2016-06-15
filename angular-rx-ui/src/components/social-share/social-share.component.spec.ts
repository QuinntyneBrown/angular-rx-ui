describe("socialShare", () => {

    var socialShareComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.socialShare");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        socialShareComponent = $controller("socialShareComponent", { socialShareActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<social-share></social-share>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(socialShareComponent).toBeDefined();
    });
})
