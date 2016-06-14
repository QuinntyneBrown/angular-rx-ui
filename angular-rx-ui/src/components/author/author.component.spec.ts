describe("author", () => {

    var authorComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.author");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        authorComponent = $controller("authorComponent", { authorActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<author></author>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(authorComponent).toBeDefined();
    });
})
