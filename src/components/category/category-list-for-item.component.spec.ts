describe("categoryListForItem", () => {

    var categoryListForItemComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.category");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        categoryListForItemComponent = $controller("categoryListForItemComponent", { categoryListForItemActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<category-list-for-item></category-list-for-item>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(categoryListForItemComponent).toBeDefined();
    });
})
