describe("property", () => {

    var propertyComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.app");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        propertyComponent = $controller("propertyComponent", { propertyActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<property></property>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(propertyComponent).toBeDefined();
    });
})
