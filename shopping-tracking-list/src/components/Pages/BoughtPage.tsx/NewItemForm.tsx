import { Grid, TextField, makeStyles, Theme, createStyles } from '@material-ui/core'
import React from 'react'
import { StoreItem } from '../../../models/StoreItem'

const useStyles = makeStyles((theme: Theme) => createStyles({
    field: {
        marginTop: theme.spacing(2),
    }
}))

interface Props {
    storeItem: Partial<StoreItem>
    onChange(store: Partial<StoreItem>): void
}

export const NewItemForm = (props: Props) => {
    const { onChange, storeItem } = props
    const classes = useStyles()

    return <Grid container direction='column'>
        <TextField label='Name' variant='outlined' value={storeItem?.name} onChange={e => onChange({ ...storeItem, name: e.target.value })} />
        {/* TODO: Autocomplete store */}
        <TextField classes={{ root: classes.field }}
            label='Store'
            variant='outlined' />
        <TextField classes={{ root: classes.field }}
            label='Price'
            variant='outlined'
            type='number'
            value={storeItem?.price}
            onChange={e => onChange({ ...storeItem, price: Number(e.target.value) })} />
        <TextField classes={{ root: classes.field }} label='Estimated Delivery Date'
            type='date'
            variant='outlined'
            InputLabelProps={{
                shrink: true,
            }}
            onChange={e => onChange({ ...storeItem, deliveryDateISO: new Date(e.target.value).toISOString() })} />
    </Grid>
}