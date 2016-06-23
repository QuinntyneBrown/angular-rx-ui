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

describe("author", function () {
    var authorComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.author");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        authorComponent = $controller("authorComponent", { authorActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<author></author>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(authorComponent).toBeDefined();
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

describe("carouselActionPanel", function () {
    var carouselActionPanelComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.carouselActionPanel");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        carouselActionPanelComponent = $controller("carouselActionPanelComponent", { carouselActionPanelActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<carousel-action-panel></carousel-action-panel>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(carouselActionPanelComponent).toBeDefined();
    });
});

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

describe("popover", function () {
    var popoverComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.popover");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        popoverComponent = $controller("popoverComponent", { popoverActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<popover></popover>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(popoverComponent).toBeDefined();
    });
});

describe("socialShareIcons", function () {
    var socialShareIconsComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.socialShare");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        socialShareIconsComponent = $controller("socialShareIconsComponent", { socialShareIconsActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<social-share-icons></social-share-icons>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(socialShareIconsComponent).toBeDefined();
    });
});

describe("socialShare", function () {
    var socialShareComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.socialShare");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        socialShareComponent = $controller("socialShareComponent", { socialShareActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<social-share></social-share>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(socialShareComponent).toBeDefined();
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
