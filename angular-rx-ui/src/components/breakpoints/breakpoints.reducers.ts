import * as actions from "./breakpoints.actions";
import { isBetween } from "../core";

export const breakpointsReducer = (state, action) => {    
    
    if (action instanceof actions.WindowResizeAction) {        
        if (isBetween(action.currentWindowSize, 0, 768))
            state.breakpointName = "x-small";

        if (isBetween(action.currentWindowSize, 769, 992))
            state.breakpointName = "small";

        if (isBetween(action.currentWindowSize, 0, 768))
            state.breakpointName = "medium";

        if (isBetween(action.currentWindowSize, 0, 768))
            state.breakpointName = "large";

        if (isBetween(action.currentWindowSize, 0))
            state.breakpointName = "x-large";
    }
    
    return state;
}
