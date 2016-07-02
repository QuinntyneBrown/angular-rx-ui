"use strict";
exports.setElementBackgroundImage = function (augmentedJQuery, backgroundImageUrl) {
    if (backgroundImageUrl)
        augmentedJQuery[0].style.backgroundImage = "url('" + backgroundImageUrl + "')";
};
angular.module("setElementBackgroundImage", [])
    .value("setElementBackgroundImage", exports.setElementBackgroundImage);
//# sourceMappingURL=set-element-background-image.js.map