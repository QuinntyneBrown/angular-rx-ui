describe("counter", () => {

    var counterComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.counter");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        counterComponent = $controller("counterComponent", { counterActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<counter></counter>")($rootScope);
        expect(counterComponent).toBeDefined();
    });

    it("should be defined", () => {
        expect(counterComponent).toBeDefined();
    });
})