describe("workSpinner", () => {

    var workSpinnerComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.workSpinner");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        workSpinnerComponent = $controller("workSpinnerComponent", { $element: {}});
    }));

    it("should compile", () => {
        var element = $compile("<work-spinner></work-spinner>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(workSpinnerComponent).toBeDefined();
    });
})
