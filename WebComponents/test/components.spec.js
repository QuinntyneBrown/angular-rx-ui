describe("counter", function () {
    var counterActionCreator;
    beforeEach(function () {
        angular.mock.module("app.counter");
    });
    beforeEach(inject(function (_counterActionCreator_) {
        counterActionCreator = _counterActionCreator_;
    }));
    it("should be defined", function () {
        expect(counterActionCreator).toBeDefined();
    });
});

describe("counter", function () {
    var counterComponent;
    beforeEach(function () {
        angular.mock.module("app.counter");
    });
    beforeEach(inject(function ($controller) {
        counterComponent = $controller("counterComponent");
    }));
    it("should be defined", function () {
        expect(counterComponent).toBeDefined();
    });
});
