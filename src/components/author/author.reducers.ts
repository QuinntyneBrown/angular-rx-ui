import * as actions from "./author.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeAuthorReducer = (state, action) => {
    if (action instanceof actions.RemoveAuthorAction)
        pluckOut({ items: state.authors, value: action.entity.id });
    return state;
}

export const addAuthorReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateAuthorAction) {
        addOrUpdate({ items: state.authors, item: action.entity });
    }
    return state;
}

export const allAuthorsReducer = (state, action) => {
    if (action instanceof actions.AllAuthorsAction) {
        state.authors = action.entities;
    }
    return state;
}

export const setCurrentAuthorReducer = (state, action) => {
    if (action instanceof actions.SetCurrentAuthorAction) {
        state.currentAuthorId = action.id;
    }
    return state;
}
