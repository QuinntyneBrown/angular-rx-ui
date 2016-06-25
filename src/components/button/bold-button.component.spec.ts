describe("boldButton", () => {

    var boldButtonComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.button");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        boldButtonComponent = $controller("boldButtonComponent", { boldButtonActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<bold-button></bold-button>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(boldButtonComponent).toBeDefined();
    });
})
