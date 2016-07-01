import { setElementDimension } from "./set-element-dimension";

export const setElementDimensions = (augmentedJQuery: angular.IAugmentedJQuery, height: string, width: string) => {
    setElementDimension("height", augmentedJQuery, height);
    setElementDimension("width", augmentedJQuery, width);
}

angular.module("setElementDimensions", [])
    .value("setElementDimensions", setElementDimensions);