export var createStore = function (app: any, intialState: any) {
        app.config(["initialStateProvider", "localStorageManagerProvider", (initialStateProvider, localStorageManagerProvider) => {
            var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
            if (!localStorageInitialState)
                localStorageManagerProvider.put({
                    name: "initialState", value: intialState
                });
            initialStateProvider.configure(localStorageManagerProvider.get({ name: "initialState" }));
        }]);
    }
