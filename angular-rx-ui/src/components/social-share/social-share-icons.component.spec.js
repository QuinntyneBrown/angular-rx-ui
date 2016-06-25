describe("socialShareIcons", function () {
    var socialShareIconsComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.socialShare");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        socialShareIconsComponent = $controller("socialShareIconsComponent", { socialShareIconsActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<social-share-icons></social-share-icons>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(socialShareIconsComponent).toBeDefined();
    });
});
//# sourceMappingURL=social-share-icons.component.spec.js.map