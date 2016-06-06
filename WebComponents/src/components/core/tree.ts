export class Tree<T> {
    /** @internal */
    _root: TreeNode<T>;

    constructor(root: TreeNode<T>) { this._root = root; }

    get root(): T { return this._root.value; }

    parent(t: T): T {
        let p = this.pathFromRoot(t);
        return p.length > 1 ? p[p.length - 2] : null;
    }

    children(t: T): T[] {
        let n = _findNode(t, this._root);
        return isPresent(n) ? n.children.map(t => t.value) : null;
    }

    firstChild(t: T): T {
        let n = _findNode(t, this._root);
        return isPresent(n) && n.children.length > 0 ? n.children[0].value : null;
    }

    pathFromRoot(t: T): T[] { return _findPath(t, this._root, []).map(s => s.value); }

    contains(tree: Tree<T>): boolean { return _contains(this._root, tree._root); }
}

function _findNode<T>(expected: T, c: TreeNode<T>): TreeNode<T> {
    if (expected === c.value) return c;
    for (let cc of c.children) {
        let r = _findNode(expected, cc);
        if (isPresent(r)) return r;
    }
    return null;
}

function isPresent(value) {
    return value != null;
}

export class TreeNode<T> {
    constructor(public value: T, public children: TreeNode<T>[]) { }
}

function _findPath<T>(expected: T, c: TreeNode<T>, collected: TreeNode<T>[]): TreeNode<T>[] {
    collected.push(c);
    if (expected === c.value) return collected;

    for (let cc of c.children) {
        let r = _findPath(expected, cc, collected);
        if (isPresent(r)) return r;
    }

    return null;
}

function _contains<T>(tree: TreeNode<T>, subtree: TreeNode<T>): boolean {
    if (tree.value !== subtree.value) return false;

    for (var subtreeNode of subtree.children) {
        let s = tree.children.filter(child => child.value === subtreeNode.value);
        if (s.length === 0) return false;
        if (!_contains(s[0], subtreeNode)) return false;
    }

    return true;
}