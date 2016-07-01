export const setElementBackgroundImage = (augmentedJQuery: angular.IAugmentedJQuery, backgroundImageUrl: string) =>
    augmentedJQuery[0].style.backgroundImage = `url('${backgroundImageUrl}')`;

angular.module("setElementBackgroundImage", [])
    .value("setElementBackgroundImage", setElementBackgroundImage);