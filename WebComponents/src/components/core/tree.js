"use strict";
var Tree = (function () {
    function Tree(root) {
        this._root = root;
    }
    Object.defineProperty(Tree.prototype, "root", {
        get: function () { return this._root.value; },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.parent = function (t) {
        var p = this.pathFromRoot(t);
        return p.length > 1 ? p[p.length - 2] : null;
    };
    Tree.prototype.children = function (t) {
        var n = _findNode(t, this._root);
        return isPresent(n) ? n.children.map(function (t) { return t.value; }) : null;
    };
    Tree.prototype.firstChild = function (t) {
        var n = _findNode(t, this._root);
        return isPresent(n) && n.children.length > 0 ? n.children[0].value : null;
    };
    Tree.prototype.pathFromRoot = function (t) { return _findPath(t, this._root, []).map(function (s) { return s.value; }); };
    Tree.prototype.contains = function (tree) { return _contains(this._root, tree._root); };
    return Tree;
}());
exports.Tree = Tree;
function _findNode(expected, c) {
    if (expected === c.value)
        return c;
    for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
        var cc = _a[_i];
        var r = _findNode(expected, cc);
        if (isPresent(r))
            return r;
    }
    return null;
}
function isPresent(value) {
    return value != null;
}
var TreeNode = (function () {
    function TreeNode(value, children) {
        this.value = value;
        this.children = children;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
function _findPath(expected, c, collected) {
    collected.push(c);
    if (expected === c.value)
        return collected;
    for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
        var cc = _a[_i];
        var r = _findPath(expected, cc, collected);
        if (isPresent(r))
            return r;
    }
    return null;
}
function _contains(tree, subtree) {
    if (tree.value !== subtree.value)
        return false;
    for (var _i = 0, _a = subtree.children; _i < _a.length; _i++) {
        var subtreeNode = _a[_i];
        var s = tree.children.filter(function (child) { return child.value === subtreeNode.value; });
        if (s.length === 0)
            return false;
        if (!_contains(s[0], subtreeNode))
            return false;
    }
    return true;
}
//# sourceMappingURL=tree.js.map