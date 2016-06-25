describe("ngrxHeader", function () {
    var ngrxHeaderComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.ngrxHeader");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        ngrxHeaderComponent = $controller("ngrxHeaderComponent", { ngrxHeaderActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<ngrx-header></ngrx-header>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(ngrxHeaderComponent).toBeDefined();
    });
});
//# sourceMappingURL=ngrx-header.component.spec.js.map