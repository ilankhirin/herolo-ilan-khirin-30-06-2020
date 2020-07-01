import React from 'react'
import { ItemsSummary } from '../../ItemsSummary/ItemsSummary'
import { AppState } from '../../../store/store'
import { useSelector } from 'react-redux'
import { ItemsState } from '../../../reducers/itemsReducer'

export const RecievedPage = () => {
    const { items } = useSelector<AppState, ItemsState>(x => x.itemsState)
    const recievedItems = items.filter(x => x.recieved)

    return <ItemsSummary items={recievedItems} />
}