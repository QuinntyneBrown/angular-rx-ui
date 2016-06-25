describe("socialShare", function () {
    var socialShareComponent;
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
        socialShareComponent = $controller("socialShareComponent", { socialShareActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<social-share></social-share>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(socialShareComponent).toBeDefined();
    });
});
//# sourceMappingURL=social-share.component.spec.js.map