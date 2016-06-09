import * as actions from "./breakpoints.actions";
import { addOrUpdate, pluckOut } from "../core";

export const breakpointsReducer = (state, action) => {    

    //TODO: fix
    
    if (action instanceof actions.WindowResizeAction) {
        if ((action as actions.WindowResizeAction).currentWindowSize < 788)
            state.breakpointName = "x-small"    

        if ((action as actions.WindowResizeAction).currentWindowSize < 788)
            state.breakpointName = "small"    

        if ((action as actions.WindowResizeAction).currentWindowSize < 788)
            state.breakpointName = "medium"    

        if ((action as actions.WindowResizeAction).currentWindowSize < 788)
            state.breakpointName = "large"    

        if ((action as actions.WindowResizeAction).currentWindowSize >= 1240)
            state.breakpointName = "x-large"    
        
    }
    
    return state;
}
