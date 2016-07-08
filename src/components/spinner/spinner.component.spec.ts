describe("spinner", () => {

    var spinnerComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.spinner");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        spinnerComponent = $controller("spinnerComponent", { spinnerActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<spinner></spinner>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(spinnerComponent).toBeDefined();
    });
})
