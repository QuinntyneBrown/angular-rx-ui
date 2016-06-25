describe("button", () => {

    var buttonComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.button");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        buttonComponent = $controller("buttonComponent", { buttonActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<button></button>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(buttonComponent).toBeDefined();
    });
})
