describe("button", function () {
    var buttonComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.button");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        buttonComponent = $controller("buttonComponent", { buttonActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<button></button>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(buttonComponent).toBeDefined();
    });
});
//# sourceMappingURL=button.component.spec.js.map