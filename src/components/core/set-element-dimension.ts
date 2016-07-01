export const setElementDimension = (dimension: string, augmentedJQuery:angular.IAugmentedJQuery, value: string) => {
    if (value && (value.indexOf("%") > -1 || value.indexOf("px") > -1)) {
        augmentedJQuery[0].style[dimension] = `${value}`;
    } else {
        augmentedJQuery[0].style[dimension] = `${value}px`;
    }        
}


angular.module("setElementDimension", [])
    .value("setElementDimension", setElementDimension);