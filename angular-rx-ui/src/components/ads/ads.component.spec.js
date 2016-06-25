describe("ads", function () {
    var adsComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.ads");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        adsComponent = $controller("adsComponent", { adsActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<ads></ads>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(adsComponent).toBeDefined();
    });
});
//# sourceMappingURL=ads.component.spec.js.map