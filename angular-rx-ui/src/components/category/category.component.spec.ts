describe("category", () => {

    var categoryComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.category");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        categoryComponent = $controller("categoryComponent", { categoryActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<category></category>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(categoryComponent).toBeDefined();
    });
})
