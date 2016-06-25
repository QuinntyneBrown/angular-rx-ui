describe("categoryList", function () {
    var categoryListComponent;
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
        categoryListComponent = $controller("categoryListComponent", { categoryListActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<category-list></category-list>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(categoryListComponent).toBeDefined();
    });
});
//# sourceMappingURL=category-list.component.spec.js.map