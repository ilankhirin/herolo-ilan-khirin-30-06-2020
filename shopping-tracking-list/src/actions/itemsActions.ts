import { Action } from "redux";
import { StoreItem } from "../models/StoreItem";

export const ADD_NEW_ITEM = 'ADD_NEW_ITEM'

export interface AddNewItemAction extends Action<typeof ADD_NEW_ITEM> {
    item: StoreItem
}

export const addNewItem = (item: StoreItem): AddNewItemAction => ({
    type: ADD_NEW_ITEM,
    item
})