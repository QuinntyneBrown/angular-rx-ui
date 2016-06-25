describe("tagList", function () {
    var tagListComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.tag");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        tagListComponent = $controller("tagListComponent", { tagListActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<tag-list></tag-list>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(tagListComponent).toBeDefined();
    });
});
//# sourceMappingURL=tag-list.component.spec.js.map