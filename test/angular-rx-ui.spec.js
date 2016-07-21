describe("ads", function () {
    var adsComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.ads");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        adsComponent = $controller("adsComponent", { adsActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<ads></ads>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(adsComponent).toBeDefined();
    });
});

describe("boldButton", function () {
    var boldButtonComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.button");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        boldButtonComponent = $controller("boldButtonComponent", { boldButtonActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<bold-button></bold-button>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(boldButtonComponent).toBeDefined();
    });
});

//describe("carouselActionPanel", () => {
//    var carouselActionPanelComponent;
//    var $compile;
//    var $rootScope;
//    class MockActionCreator { }
//    beforeEach(() => {
//        angular.mock.module("app.carouselActionPanel");
//    });
//    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
//        $rootScope = _$rootScope_;
//        $compile = _$compile_;
//        carouselActionPanelComponent = $controller("carouselActionPanelComponent", { carouselActionPanelActionCreator: new MockActionCreator() });
//    }));
//    it("should compile", () => {
//        var element = $compile("<carousel-action-panel></carousel-action-panel>")($rootScope);
//        expect(element).toBeDefined();
//    });
//    it("should be defined", () => {
//        expect(carouselActionPanelComponent).toBeDefined();
//    });
//})

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
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.counter");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        counterComponent = $controller("counterComponent", { counterActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<counter></counter>")($rootScope);
        expect(counterComponent).toBeDefined();
    });
    it("should be defined", function () {
        expect(counterComponent).toBeDefined();
    });
});

//describe("errorList", () => {
//    var errorListComponent;
//    var $compile;
//    var $rootScope;
//    class MockActionCreator { }
//    beforeEach(() => {
//        angular.mock.module("app.errorList");
//    });
//    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
//        $rootScope = _$rootScope_;
//        $compile = _$compile_;
//        errorListComponent = $controller("errorListComponent", { errorListActionCreator: new MockActionCreator() });
//    }));
//    it("should compile", () => {
//        var element = $compile("<error-list></error-list>")($rootScope);
//        expect(element).toBeDefined();
//    });
//    it("should be defined", () => {
//        expect(errorListComponent).toBeDefined();
//    });
//})

describe("flyout", function () {
    var flyoutComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.flyout");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        flyoutComponent = $controller("flyoutComponent", { flyoutActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<flyout></flyout>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(flyoutComponent).toBeDefined();
    });
});

describe("hamburgerButton", function () {
    var hamburgerButtonComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.hamburgerButton");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        hamburgerButtonComponent = $controller("hamburgerButtonComponent", { hamburgerButtonActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<hamburger-button></hamburger-button>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(hamburgerButtonComponent).toBeDefined();
    });
});

describe("hero", function () {
    var heroComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.hero");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        heroComponent = $controller("heroComponent", { $element: $compile("<hero></hero>")($rootScope) });
    }));
    it("should compile", function () {
        var element = $compile("<hero></hero>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(heroComponent).toBeDefined();
    });
});

describe("navMenu", function () {
    var navMenuComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.navMenu");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        navMenuComponent = $controller("navMenuComponent", { navMenuActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<nav-menu></nav-menu>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(navMenuComponent).toBeDefined();
    });
});

describe("panel", function () {
    var panelComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.panel");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        panelComponent = $controller("panelComponent", { panelActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<panel></panel>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(panelComponent).toBeDefined();
    });
});



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

describe("river", function () {
    var riverComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.river");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        riverComponent = $controller("riverComponent", { riverActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<river></river>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(riverComponent).toBeDefined();
    });
});

//describe("socialShareItem", () => {
//    var socialShareItemComponent;
//    var $compile;
//    var $rootScope;
//    class MockActionCreator { }
//    beforeEach(() => {
//        angular.mock.module("app.socialShare");
//    });
//    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
//        $rootScope = _$rootScope_;
//        $compile = _$compile_;
//        socialShareItemComponent = $controller("socialShareItemComponent", { socialShareItemActionCreator: new MockActionCreator() });
//    }));
//    it("should compile", () => {
//        var element = $compile("<social-share-item></social-share-item>")($rootScope);
//        expect(element).toBeDefined();
//    });
//    it("should be defined", () => {
//        expect(socialShareItemComponent).toBeDefined();
//    });
//})

//describe("socialShare", () => {
//    var socialShareComponent;
//    var $compile;
//    var $rootScope;
//    class MockActionCreator { }
//    beforeEach(() => {
//        angular.mock.module("app.socialShare");
//    });
//    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
//        $rootScope = _$rootScope_;
//        $compile = _$compile_;
//        socialShareComponent = $controller("socialShareComponent", { socialShareActionCreator: new MockActionCreator() });
//    }));
//    it("should compile", () => {
//        var element = $compile("<social-share></social-share>")($rootScope);
//        expect(element).toBeDefined();
//    });
//    it("should be defined", () => {
//        expect(socialShareComponent).toBeDefined();
//    });
//})

describe("spinner", function () {
    var spinnerComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.spinner");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        spinnerComponent = $controller("spinnerComponent", { spinnerActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<spinner></spinner>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(spinnerComponent).toBeDefined();
    });
});
