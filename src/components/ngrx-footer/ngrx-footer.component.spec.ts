describe("ngrxFooter", () => {

    var ngrxFooterComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.ngrxFooter");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        ngrxFooterComponent = $controller("ngrxFooterComponent", { ngrxFooterActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<ngrx-footer></ngrx-footer>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(ngrxFooterComponent).toBeDefined();
    });
})
