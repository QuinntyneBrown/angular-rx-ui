describe("picture", function () {
    var pictureComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.picture");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        pictureComponent = $controller("pictureComponent", { pictureActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<picture></picture>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(pictureComponent).toBeDefined();
    });
});
//# sourceMappingURL=picture.component.spec.js.map