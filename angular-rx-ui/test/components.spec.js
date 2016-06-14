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

describe("articleAuthor", function () {
    var articleAuthorComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.blog");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleAuthorComponent = $controller("articleAuthorComponent", { articleAuthorActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-author></article-author>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleAuthorComponent).toBeDefined();
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
        angular.mock.module("app.articleBody");
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

describe("articleCategory", function () {
    var articleCategoryComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.articleCategory");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleCategoryComponent = $controller("articleCategoryComponent", { articleCategoryActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-category></article-category>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleCategoryComponent).toBeDefined();
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
        angular.mock.module("app.articleHeader");
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

describe("articleSocialShare", function () {
    var articleSocialShareComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.blog");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        articleSocialShareComponent = $controller("articleSocialShareComponent", { articleSocialShareActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<article-social-share></article-social-share>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(articleSocialShareComponent).toBeDefined();
    });
});

describe("blogListItem", function () {
    var blogListItemComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.blog");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        blogListItemComponent = $controller("blogListItemComponent", { blogListItemActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<blog-list-item></blog-list-item>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(blogListItemComponent).toBeDefined();
    });
});

describe("blogList", function () {
    var blogListComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.blog");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        blogListComponent = $controller("blogListComponent", { blogListActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<blog-list></blog-list>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(blogListComponent).toBeDefined();
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
        angular.mock.module("app.tagList");
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
