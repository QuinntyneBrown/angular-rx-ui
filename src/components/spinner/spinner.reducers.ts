import * as actions from "./spinner.actions";
import { addOrUpdate, pluckOut } from "../core";

export const spinnerReducer = (state, action) => {
    if (action instanceof actions.ShowSpinnerAction)
        state.spinnerVisible = true;

    if (action instanceof actions.HideSpinnerAction)
        state.spinnerVisible = false;

    return state;
}
