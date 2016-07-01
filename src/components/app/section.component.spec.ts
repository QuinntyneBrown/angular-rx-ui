describe("section", () => {

    var sectionComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.app");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        sectionComponent = $controller("sectionComponent", { sectionActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<section></section>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(sectionComponent).toBeDefined();
    });
})
