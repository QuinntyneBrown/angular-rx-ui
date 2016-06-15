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

describe("articleBody", function () {
    var articleBodyComponent;
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
        articleBodyComponent = $controller("articleBodyComponent", { articleBodyActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-body></article-body>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleBodyComponent).toBeDefined();
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

describe("articleFeaturedImage", function () {
    var articleFeaturedImageComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.articleFeaturedImage");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleFeaturedImageComponent = $controller("articleFeaturedImageComponent", { articleFeaturedImageActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-featured-image></article-featured-image>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleFeaturedImageComponent).toBeDefined();
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

describe("category", function () {
    var categoryComponent;
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
        categoryComponent = $controller("categoryComponent", { categoryActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<category></category>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(categoryComponent).toBeDefined();
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

describe("socialShareList", function () {
    var socialShareListComponent;
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
        socialShareListComponent = $controller("socialShareListComponent", { socialShareListActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<social-share-list></social-share-list>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(socialShareListComponent).toBeDefined();
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
