import { addOrUpdate, pluckOut } from "../core";
import { RotatorPreviousAction, RotatorNextAction } from "./rotator.actions";

export const rotatorPreviousReducer = (state, action) => {
    if (action instanceof RotatorPreviousAction) { }
    return state;
}

export const rotatorNextReducer = (state, action) => {
    if (action instanceof RotatorNextAction) { }
    return state;
}
