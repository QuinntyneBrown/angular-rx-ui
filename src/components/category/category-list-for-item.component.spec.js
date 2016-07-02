describe("categoryListForItem", function () {
    var categoryListForItemComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.category");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        categoryListForItemComponent = $controller("categoryListForItemComponent", { categoryListForItemActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<category-list-for-item></category-list-for-item>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(categoryListForItemComponent).toBeDefined();
    });
});
//# sourceMappingURL=category-list-for-item.component.spec.js.map