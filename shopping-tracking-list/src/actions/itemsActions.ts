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


export const SET_ITEM_RECIEVED_STATUS = 'SET_ITEM_RECIEVED_STATUS'

export interface SetItemRecievedStatusAction extends Action<typeof SET_ITEM_RECIEVED_STATUS> {
    itemId: string
    recieved: boolean
}

export const setItemRecievedStatus = (itemId: string, recieved: boolean): SetItemRecievedStatusAction => ({
    type: SET_ITEM_RECIEVED_STATUS,
    itemId,
    recieved
})