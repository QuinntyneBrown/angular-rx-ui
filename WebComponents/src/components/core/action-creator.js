"use strict";
var BaseActionCreator = (function () {
    function BaseActionCreator($location, service, dispatcher, guid, addOrUpdateAction, allAction, removeAction, setCurrentAction) {
        var _this = this;
        this.$location = $location;
        this.service = service;
        this.dispatcher = dispatcher;
        this.guid = guid;
        this.addOrUpdateAction = addOrUpdateAction;
        this.allAction = allAction;
        this.removeAction = removeAction;
        this.setCurrentAction = setCurrentAction;
        this.getById = function (options) {
            var newId = _this.guid();
            _this.service.getById({ id: options.id }).then(function (results) {
                var action = new _this.addOrUpdateAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.all = function () {
            var newId = _this.guid();
            _this.service.get().then(function (results) {
                var action = new _this.allAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.addOrUpdate = function (options) {
            var newId = _this.guid();
            _this.service.add({ data: options.data }).then(function (results) {
                var action = new _this.addOrUpdateAction(newId, results);
                _this.dispatcher.dispatch(action);
            });
            return newId;
        };
        this.remove = function (options) {
            var newId = _this.guid();
            _this.service.remove({
                id: options.entity.id
            }).then(function (results) {
                _this.dispatcher.dispatch(new _this.removeAction(newId, options.entity));
            });
            return newId;
        };
        this.edit = function (options) { return _this.dispatcher.dispatch(new _this.setCurrentAction(options.entity)); };
        this.create = function () { return _this.dispatcher.dispatch(new _this.setCurrentAction(null)); };
    }
    return BaseActionCreator;
}());
exports.BaseActionCreator = BaseActionCreator;
//# sourceMappingURL=action-creator.js.map