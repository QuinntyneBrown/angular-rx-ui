describe("popover", () => {

    var popoverComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.popover");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        popoverComponent = $controller("popoverComponent", { popoverActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<popover></popover>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(popoverComponent).toBeDefined();
    });
})
