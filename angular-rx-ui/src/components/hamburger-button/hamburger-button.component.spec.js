describe("hamburgerButton", function () {
    var hamburgerButtonComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.hamburgerButton");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        hamburgerButtonComponent = $controller("hamburgerButtonComponent", { hamburgerButtonActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<hamburger-button></hamburger-button>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(hamburgerButtonComponent).toBeDefined();
    });
});
//# sourceMappingURL=hamburger-button.component.spec.js.map