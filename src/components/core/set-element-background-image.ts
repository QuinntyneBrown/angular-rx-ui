export const setElementBackgroundImage = (augmentedJQuery: angular.IAugmentedJQuery, backgroundImageUrl: string) => {
    if (backgroundImageUrl) {
        augmentedJQuery[0].style.backgroundImage = `url('${backgroundImageUrl}')`;
        augmentedJQuery[0].style.backgroundSize = "cover";
        augmentedJQuery[0].style.backgroundRepeat = "no-repeat";
        augmentedJQuery[0].style.backgroundPosition = "center top";
    }
}

angular.module("setElementBackgroundImage", [])
    .value("setElementBackgroundImage", setElementBackgroundImage);