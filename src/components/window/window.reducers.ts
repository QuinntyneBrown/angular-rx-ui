import { ResizeAction, KeyDownAction } from "./window.actions";
import { addOrUpdate, pluckOut, isBetween } from "../core";

export const breakpointsReducer = (state, action) => {

    if (action instanceof ResizeAction) {
        if (isBetween(action.innerWidth, 0, 768))
            state.breakpointName = "x-small";

        if (isBetween(action.innerWidth, 769, 992))
            state.breakpointName = "small";

        if (isBetween(action.innerWidth, 0, 768))
            state.breakpointName = "medium";

        if (isBetween(action.innerWidth, 0, 768))
            state.breakpointName = "large";

        if (isBetween(action.innerWidth, 0))
            state.breakpointName = "x-large";
    }

    return state;
}
