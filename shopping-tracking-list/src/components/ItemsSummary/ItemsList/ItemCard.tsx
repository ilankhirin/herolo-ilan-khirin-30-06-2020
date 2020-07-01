import { Button, Card, CardActions, CardContent, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded'
import React from 'react'
import { StoreItem } from '../../../models/StoreItem'
import { getCurrencySymbol } from '../../../utils/getCurrencySymbol'
import { DeliveyDate } from './DeliveryDate'
import { useDispatch } from 'react-redux'
import { setItemRecievedStatus } from '../../../actions/itemsActions'
import SentimentDissatisfiedRoundedIcon from '@material-ui/icons/SentimentDissatisfiedRounded';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        minWidth: theme.spacing(40),
        margin: theme.spacing(2)
    },
    date: {
        marginTop: theme.spacing(0.5)
    },
    storeLabel: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: theme.spacing(1)
    },
    deliveredIcon: {
        marginLeft: theme.spacing(1)
    }
}))

interface Props {
    item: StoreItem
}

export const ItemCard = (props: Props) => {
    const { item } = props
    const classes = useStyles()
    const dispatch = useDispatch()
    const { id, recieved, name, store, price, priceCurrency, deliveryDateISO } = item

    return <Card className={classes.root} elevation={4}>
        <CardContent>
            <Grid container direction='row' justify='space-between'>
                <Grid item>
                    <Typography variant='subtitle1'>{name}</Typography>
                    {/* TODO: Fix currency by user settings */}
                    <Typography variant='subtitle2'>{price}{getCurrencySymbol(priceCurrency)}</Typography>
                </Grid>
                <Grid item className={classes.date}>
                    <DeliveyDate dateISO={deliveryDateISO} />
                </Grid>
            </Grid>
        </CardContent>
        <CardActions>
            <Grid container direction='row' justify='space-between'>
                <Grid item className={classes.storeLabel}>
                    <Typography variant='subtitle2'>From {store}</Typography>
                </Grid>
                <Grid item>
                    {recieved ?
                        <Button variant='outlined' onClick={() => dispatch(setItemRecievedStatus(id, false))}>
                            Still waiting
                            <SentimentDissatisfiedRoundedIcon className={classes.deliveredIcon} />
                        </Button>
                        :
                        <Button variant='outlined' onClick={() => dispatch(setItemRecievedStatus(id, true))}>
                            Recieved
                            <DoneOutlineRoundedIcon className={classes.deliveredIcon} />
                        </Button>}
                </Grid>
            </Grid>
        </CardActions>
    </Card>
}