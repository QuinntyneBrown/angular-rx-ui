describe("ngrxHeader", () => {

    var ngrxHeaderComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.ngrxHeader");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        ngrxHeaderComponent = $controller("ngrxHeaderComponent", { ngrxHeaderActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<ngrx-header></ngrx-header>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(ngrxHeaderComponent).toBeDefined();
    });
})
