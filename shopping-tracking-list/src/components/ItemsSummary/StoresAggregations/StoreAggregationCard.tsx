import { Card, CardActions, CardContent, createStyles, Divider, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import React, { Fragment } from 'react'
import { StoreItem } from '../../../models/StoreItem'
import { getCurrencySymbol } from '../../../utils/getCurrencySymbol'
import { useConvertCurrency } from '../../../custom-hooks/useConvertCurrency'
import { useSelector } from 'react-redux'
import { AppState } from '../../../store/store'
import { UserSettings } from '../../../reducers/userSettingsReducer'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        minWidth: theme.spacing(40),
        maxWidth: theme.spacing(80),
        margin: theme.spacing(2),
    },
    content: {
        paddingBottom: theme.spacing(1)
    }
}))

interface Props {
    store: string
    items: StoreItem[]
}

export const StoreAggregationCard = (props: Props) => {
    const { items, store } = props
    const classes = useStyles()
    const convertCurrency = useConvertCurrency()
    const { preferredCurrency } = useSelector<AppState, UserSettings>(x => x.userSettings)

    const totalPrice = items.reduce((prev, current) => prev + convertCurrency(current.price, current.priceCurrency), 0)
    const preferredCurrencySymbol = getCurrencySymbol(preferredCurrency)

    return <Card className={classes.root} elevation={4}>
        <CardContent classes={{ root: classes.content }}>
            <Typography gutterBottom variant='h6'>{store}</Typography>
            {items.map(x => <Fragment key={x.id}>
                <Grid container direction='row' justify='space-between'>
                    <Grid item>
                        <Typography variant='subtitle2'>{x.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='caption'>{convertCurrency(x.price, x.priceCurrency).toFixed(2)}{preferredCurrencySymbol}</Typography>
                    </Grid>
                </Grid>
            </Fragment>)}
        </CardContent>
        <Divider />
        <CardActions>
            <Grid container direction='row' justify='space-between'>
                <Grid item>
                    <Typography>Total of {items.length} items</Typography>
                </Grid>
                <Grid item>
                    <Typography>Total price: {totalPrice.toFixed(2)}{preferredCurrencySymbol}</Typography>
                </Grid>
            </Grid>
        </CardActions>
    </Card>
}