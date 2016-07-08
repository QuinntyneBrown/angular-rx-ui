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

describe("articleDetail", function () {
    var articleDetailComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.article");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleDetailComponent = $controller("articleDetailComponent", { articleDetailActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-detail></article-detail>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleDetailComponent).toBeDefined();
    });
});

//describe("articleEditorContainer", () => {
//    var articleEditorContainerComponent;
//    var $compile;
//    var $rootScope;
//    class MockActionCreator { }
//    beforeEach(() => {
//        angular.mock.module("app.article");
//    });
//    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
//        $rootScope = _$rootScope_;
//        $compile = _$compile_;
//        articleEditorContainerComponent = $controller("articleEditorContainerComponent", { articleEditorContainerActionCreator: new MockActionCreator() });
//    }));
//    it("should compile", () => {
//        var element = $compile("<article-editor-container></article-editor-container>")($rootScope);
//        expect(element).toBeDefined();
//    });
//    it("should be defined", () => {
//        expect(articleEditorContainerComponent).toBeDefined();
//    });
//})

describe("articleEditor", function () {
    var articleEditorComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.article");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleEditorComponent = $controller("articleEditorComponent", { articleEditorActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-editor></article-editor>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleEditorComponent).toBeDefined();
    });
});

describe("articleHeader", function () {
    var articleHeaderComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.article");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleHeaderComponent = $controller("articleHeaderComponent", { articleHeaderActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-header></article-header>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleHeaderComponent).toBeDefined();
    });
});

describe("articleListItem", function () {
    var articleListItemComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.article");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleListItemComponent = $controller("articleListItemComponent", { articleListItemActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-list-item></article-list-item>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleListItemComponent).toBeDefined();
    });
});

describe("articleList", function () {
    var articleListComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.article");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleListComponent = $controller("articleListComponent", { articleListActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-list></article-list>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleListComponent).toBeDefined();
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

describe("button", function () {
    var buttonComponent;
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
        buttonComponent = $controller("buttonComponent", { buttonActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<button></button>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(buttonComponent).toBeDefined();
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

describe("categoryListForItem", function () {
    var categoryListForItemComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.category");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        categoryListForItemComponent = $controller("categoryListForItemComponent", { categoryListForItemActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<category-list-for-item></category-list-for-item>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(categoryListForItemComponent).toBeDefined();
    });
});

describe("categoryList", function () {
    var categoryListComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.category");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        categoryListComponent = $controller("categoryListComponent", { categoryListActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<category-list></category-list>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(categoryListComponent).toBeDefined();
    });
});

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

describe("tagList", function () {
    var tagListComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.tag");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        tagListComponent = $controller("tagListComponent", { tagListActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<tag-list></tag-list>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(tagListComponent).toBeDefined();
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

describe("workSpinner", function () {
    var workSpinnerComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.workSpinner");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        workSpinnerComponent = $controller("workSpinnerComponent", { $element: {} });
    }));
    it("should compile", function () {
        var element = $compile("<work-spinner></work-spinner>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(workSpinnerComponent).toBeDefined();
    });
});
