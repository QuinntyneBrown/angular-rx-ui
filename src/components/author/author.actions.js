"use strict";
var SelectAuthorAction = (function () {
    function SelectAuthorAction(entity) {
        this.entity = entity;
    }
    return SelectAuthorAction;
}());
exports.SelectAuthorAction = SelectAuthorAction;
var AddOrUpdateAuthorAction = (function () {
    function AddOrUpdateAuthorAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return AddOrUpdateAuthorAction;
}());
exports.AddOrUpdateAuthorAction = AddOrUpdateAuthorAction;
var AllAuthorsAction = (function () {
    function AllAuthorsAction(id, entities) {
        this.id = id;
        this.entities = entities;
    }
    return AllAuthorsAction;
}());
exports.AllAuthorsAction = AllAuthorsAction;
var RemoveAuthorAction = (function () {
    function RemoveAuthorAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return RemoveAuthorAction;
}());
exports.RemoveAuthorAction = RemoveAuthorAction;
var AuthorsFilterAction = (function () {
    function AuthorsFilterAction(id, term) {
        this.id = id;
        this.term = term;
    }
    return AuthorsFilterAction;
}());
exports.AuthorsFilterAction = AuthorsFilterAction;
var SetCurrentAuthorAction = (function () {
    function SetCurrentAuthorAction(entity) {
        this.entity = entity;
    }
    return SetCurrentAuthorAction;
}());
exports.SetCurrentAuthorAction = SetCurrentAuthorAction;
var AddOrUpdateAuthorSuccessAction = (function () {
    function AddOrUpdateAuthorSuccessAction(entity) {
        this.entity = entity;
    }
    return AddOrUpdateAuthorSuccessAction;
}());
exports.AddOrUpdateAuthorSuccessAction = AddOrUpdateAuthorSuccessAction;
var CurrentAuthorRemovedAction = (function () {
    function CurrentAuthorRemovedAction() {
    }
    return CurrentAuthorRemovedAction;
}());
exports.CurrentAuthorRemovedAction = CurrentAuthorRemovedAction;
//# sourceMappingURL=author.actions.js.map