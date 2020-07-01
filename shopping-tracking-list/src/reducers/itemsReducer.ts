import { StoreItem } from "../models/StoreItem";
import { Action } from "redux";
import { ADD_NEW_ITEM, AddNewItemAction, SET_ITEM_RECIEVED_STATUS, SetItemRecievedStatusAction } from "../actions/itemsActions";

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
        case SET_ITEM_RECIEVED_STATUS: {
            const { recieved, itemId } = action as SetItemRecievedStatusAction

            return {
                ...state,
                items: state.items.map(x => x.id === itemId ? { ...x, recieved } : x)
            }
        }
        default:
            return state
    }
}