"use strict";
exports.createStore = function (app, intialState) {
    app.config(["initialStateProvider", "localStorageManagerProvider", function (initialStateProvider, localStorageManagerProvider) {
            var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
            if (!localStorageInitialState)
                localStorageManagerProvider.put({
                    name: "initialState", value: intialState
                });
            initialStateProvider.configure(localStorageManagerProvider.get({ name: "initialState" }));
        }]);
};
//# sourceMappingURL=create-store.js.map