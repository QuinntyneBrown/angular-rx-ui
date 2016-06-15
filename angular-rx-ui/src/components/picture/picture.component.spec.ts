describe("picture", () => {

    var pictureComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.picture");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        pictureComponent = $controller("pictureComponent", { pictureActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<picture></picture>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(pictureComponent).toBeDefined();
    });
})
