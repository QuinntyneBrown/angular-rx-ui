describe("ads", () => {

    var adsComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.ads");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        adsComponent = $controller("adsComponent", { adsActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<ads></ads>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(adsComponent).toBeDefined();
    });
})
