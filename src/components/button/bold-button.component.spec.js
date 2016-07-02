describe("boldButton", function () {
    var boldButtonComponent;
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
        boldButtonComponent = $controller("boldButtonComponent", { boldButtonActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<bold-button></bold-button>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(boldButtonComponent).toBeDefined();
    });
});
//# sourceMappingURL=bold-button.component.spec.js.map