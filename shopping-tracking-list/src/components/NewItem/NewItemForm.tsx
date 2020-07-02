import { createStyles, Grid, makeStyles, MenuItem, Select, TextField, Theme } from '@material-ui/core'
import React from 'react'
import { Currency, currencyTypes } from '../../models/Currency'
import { StoreItem } from '../../models/StoreItem'
import { StoreSelector } from './StoreSelector'

const useStyles = makeStyles((theme: Theme) => createStyles({
    field: {
        marginTop: theme.spacing(2),
    },
    currencySelector: {
        marginLeft: theme.spacing(1)
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
        <TextField label='Name' variant='outlined' value={storeItem.name} onChange={e => onChange({ name: e.target.value })} />
        <StoreSelector value={storeItem.store}
            classes={{ root: classes.field }}
            onChange={store => onChange({ store: store ?? '' })} />
        <Grid container className={classes.field} item direction='row'>
            <TextField label='Price'
                variant='outlined'
                type='number'
                value={storeItem.price}
                onChange={e => onChange({ price: Number(e.target.value) })} />
            <Select className={classes.currencySelector}
                value={storeItem.priceCurrency}
                onChange={x => onChange({ priceCurrency: x.target.value as Currency })}>
                {currencyTypes.map(x => <MenuItem value={x} key={x}>{x}</MenuItem>)}
            </Select>
        </Grid>
        <TextField classes={{ root: classes.field }} label='Estimated Delivery Date'
            type='date'
            variant='outlined'
            InputLabelProps={{
                shrink: true,
            }}
            onChange={e => onChange({ deliveryDateISO: new Date(e.target.value).toISOString() })} />
    </Grid>
}