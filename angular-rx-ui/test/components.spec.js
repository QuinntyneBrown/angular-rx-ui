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

describe("blogDetail", function () {
    var blogDetailComponent;
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
        blogDetailComponent = $controller("blogDetailComponent", { blogDetailActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<blog-detail></blog-detail>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(blogDetailComponent).toBeDefined();
    });
});

describe("blogHeader", function () {
    var blogHeaderComponent;
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
        blogHeaderComponent = $controller("blogHeaderComponent", { blogHeaderActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<blog-header></blog-header>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(blogHeaderComponent).toBeDefined();
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
