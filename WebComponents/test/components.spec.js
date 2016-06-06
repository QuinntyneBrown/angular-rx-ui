describe("counter", function () {
    beforeEach(function () {
        angular.mock.module("counter");
    });
    it("should be defined", function () {
        expect(1).toEqual(1);
    });
});
