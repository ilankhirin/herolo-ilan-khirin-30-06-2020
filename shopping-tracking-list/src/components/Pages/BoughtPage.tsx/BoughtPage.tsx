import { Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { ItemsState } from '../../../reducers/itemsReducer'
import { AppState } from '../../../store/store'
import { ItemsSummary } from '../../ItemsSummary/ItemsSummary'
import { AddItemFab } from './AddItemFab'

export const BoughtPage = () => {
    const { items } = useSelector<AppState, ItemsState>(x => x.itemsState)
    const unrecievedItems = items.filter(x => !x.recieved)

    return <Grid container>
        <ItemsSummary items={unrecievedItems} />
        <AddItemFab />
    </Grid>
}