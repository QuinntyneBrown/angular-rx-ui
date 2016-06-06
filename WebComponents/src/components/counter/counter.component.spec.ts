describe("counter", () => {

    beforeEach(() => {
        angular.mock.module("counter");
    });

    it("should be defined", () => {
        expect(1).toEqual(1);
    });
})