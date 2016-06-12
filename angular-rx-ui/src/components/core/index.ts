
export * from "./store";
export * from "./action-decorator";
export * from "./pluck-out";
export * from "./invoke-async";
export * from "./change-detection-strategy";
export * from "./component-decorators";
export * from "./service-decorator";
export * from "./add-or-update";
export * from "./action-creator";

export * from "./view-encapsulation";
export * from "./fetch";
export * from "./provide";
export * from "./provide-action";
export * from "./get-x";
export * from "./is-between";
export * from "./translate-x";

export const Observable = Rx.Observable;


angular.extend(window, Rx); 