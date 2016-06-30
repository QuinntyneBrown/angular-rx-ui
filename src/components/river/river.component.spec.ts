describe("river", () => {

    var riverComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.river");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        riverComponent = $controller("riverComponent", { riverActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<river></river>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(riverComponent).toBeDefined();
    });
})
