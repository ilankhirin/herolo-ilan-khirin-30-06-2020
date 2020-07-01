import { Grid } from '@material-ui/core'
import React from 'react'
import { ItemsSummary } from '../../ItemsSummary/ItemsSummary'
import { AddItemFab } from './AddItemFab'

export const BoughtPage = () => {
    return <Grid container>
        <ItemsSummary />
        <AddItemFab />
    </Grid>
}