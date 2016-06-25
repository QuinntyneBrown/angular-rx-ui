describe("ngrxFooter", function () {
    var ngrxFooterComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.ngrxFooter");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        ngrxFooterComponent = $controller("ngrxFooterComponent", { ngrxFooterActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<ngrx-footer></ngrx-footer>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(ngrxFooterComponent).toBeDefined();
    });
});
//# sourceMappingURL=ngrx-footer.component.spec.js.map