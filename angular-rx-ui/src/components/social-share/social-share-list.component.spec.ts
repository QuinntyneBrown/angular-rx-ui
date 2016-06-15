describe("socialShareList", () => {

    var socialShareListComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.socialShare");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        socialShareListComponent = $controller("socialShareListComponent", { socialShareListActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<social-share-list></social-share-list>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(socialShareListComponent).toBeDefined();
    });
})
