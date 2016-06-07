export var getActionType = fn => {    
    return fn.__proto__.constructor.actionName;
};