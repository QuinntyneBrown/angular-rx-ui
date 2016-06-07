describe("counter", function () {
    var counterComponent;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.counter");
    });
    beforeEach(inject(function ($controller) {
        counterComponent = $controller("counterComponent", { counterActionCreator: new MockActionCreator() });
    }));
    it("should be defined", function () {
        expect(counterComponent).toBeDefined();
    });
});
//# sourceMappingURL=counter.component.spec.js.map