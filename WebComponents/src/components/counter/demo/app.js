angular
    .module("counterDemoApp", [
    "app.counter"
    ])
    .controller("mainController", ["counterActionCreator", "store","counter.increment",function mainController(counterActionCreator, store, counterIncrement) {

        store.subscribe(function (state) {            
            if (state && state.lastTriggeredByAction instanceof counterIncrement) 
                console.log(counterIncrement.type);                        
        });

        counterActionCreator.increment();
        counterActionCreator.increment();
        counterActionCreator.increment();
    }]);
