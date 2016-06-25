describe("categoryList", () => {

    var categoryListComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.category");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        categoryListComponent = $controller("categoryListComponent", { categoryListActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<category-list></category-list>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(categoryListComponent).toBeDefined();
    });
})
