describe("counter", () => {

    var counterComponent;

    beforeEach(() => {
        angular.mock.module("app.counter");
    });

    beforeEach(inject(($controller) => {
        counterComponent = $controller("counterComponent");
    }));

    it("should be defined", () => {
        expect(counterComponent).toBeDefined();
    });
})