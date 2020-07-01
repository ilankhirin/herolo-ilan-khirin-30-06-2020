import { StoreItem } from "../models/StoreItem";
import { Action } from "redux";
import { ADD_NEW_ITEM, AddNewItemAction } from "../actions/itemsActions";

export interface ItemsState {
    items: StoreItem[]
}

const initialState: ItemsState = {
    items: []
}

export const itemsReducer = (state: ItemsState = initialState, action: Action): ItemsState => {
    switch (action.type) {
        case ADD_NEW_ITEM: {
            const { item } = action as AddNewItemAction

            return {
                ...state,
                items: [...state.items, item]
            }
        }
        default:
            return state
    }
}