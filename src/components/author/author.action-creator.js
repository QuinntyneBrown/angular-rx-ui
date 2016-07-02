"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("../core");
var modal_action_creator_1 = require("../modal/modal.action-creator");
var author_actions_1 = require("./author.actions");
var AuthorActionCreator = (function (_super) {
    __extends(AuthorActionCreator, _super);
    function AuthorActionCreator($location, dispatcher, authorService, guid, invokeAsync, modalActionCreator) {
        var _this = this;
        _super.call(this, $location, authorService, dispatcher, guid, author_actions_1.AddOrUpdateAuthorAction, author_actions_1.AllAuthorsAction, author_actions_1.RemoveAuthorAction, author_actions_1.SetCurrentAuthorAction);
        this.invokeAsync = invokeAsync;
        this.modalActionCreator = modalActionCreator;
        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new author_actions_1.AddOrUpdateAuthorSuccessAction(options.entity)); };
        this.currentAuthorRemoved = function () { return _this.dispatcher.dispatch(new author_actions_1.CurrentAuthorRemovedAction()); };
        this.openAuthorPickerModal = function () {
            _this.invokeAsync(_this.all)
                .then(function () { return _this.modalActionCreator.open({ html: "<author-picker-modal></author-picker-modal>" }); });
        };
        this.closeModal = function () { return _this.modalActionCreator.close(); };
        this.select = function (entity) { return _this.dispatcher.dispatch(new author_actions_1.SelectAuthorAction(entity)); };
    }
    AuthorActionCreator = __decorate([
        core_1.Service({
            serviceName: "authorActionCreator",
            viewProviders: ["$location", "dispatcher", "authorService", "guid", "invokeAsync", "modalActionCreator"]
        }), 
        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, modal_action_creator_1.ModalActionCreator])
    ], AuthorActionCreator);
    return AuthorActionCreator;
}(core_1.BaseActionCreator));
exports.AuthorActionCreator = AuthorActionCreator;
//# sourceMappingURL=author.action-creator.js.map