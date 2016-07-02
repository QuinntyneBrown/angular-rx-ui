describe("author", function () {
    var authorComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.author");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        authorComponent = $controller("authorComponent", { authorActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<author></author>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(authorComponent).toBeDefined();
    });
});
//# sourceMappingURL=author.component.spec.js.map