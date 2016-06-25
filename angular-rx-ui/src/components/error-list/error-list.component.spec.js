describe("errorList", function () {
    var errorListComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.errorList");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        errorListComponent = $controller("errorListComponent", { errorListActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<error-list></error-list>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(errorListComponent).toBeDefined();
    });
});
//# sourceMappingURL=error-list.component.spec.js.map