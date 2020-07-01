import React, { Fragment } from 'react'
import { StoreItem } from '../../../models/StoreItem'
import { Card, makeStyles, Theme, createStyles, CardContent, Typography, Grid, Divider, Paper, CardActions } from '@material-ui/core'
import { getCurrencySymbol } from '../../../utils/getCurrencySymbol'

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

    //TODO: calculate by currency
    const totalPrice = items.reduce((prev, current) => prev + current.price, 0)

    return <Card className={classes.root} elevation={4}>
        <CardContent classes={{ root: classes.content }}>
            <Typography gutterBottom variant='h6'>{store}</Typography>
            {items.map(x => <Fragment key={x.id}>
                <Grid container direction='row' justify='space-between'>
                    <Grid item>
                        <Typography variant='subtitle2'>{x.name}</Typography>
                    </Grid>
                    <Grid item>
                        {/* TODO: Fix price */}
                        <Typography variant='caption'>{x.price}{getCurrencySymbol(x.priceCurrency)}</Typography>
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
                    <Typography>Total price: {totalPrice}</Typography>
                </Grid>
            </Grid>
        </CardActions>
    </Card>
}