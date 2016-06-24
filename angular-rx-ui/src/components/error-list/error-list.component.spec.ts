describe("errorList", () => {

    var errorListComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.errorList");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        errorListComponent = $controller("errorListComponent", { errorListActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<error-list></error-list>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(errorListComponent).toBeDefined();
    });
})
