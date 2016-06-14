describe("tagList", () => {

    var tagListComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.tagList");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        tagListComponent = $controller("tagListComponent", { tagListActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<tag-list></tag-list>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(tagListComponent).toBeDefined();
    });
})
