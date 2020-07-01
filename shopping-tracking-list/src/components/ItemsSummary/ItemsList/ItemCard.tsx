import { Button, Card, CardActions, CardContent, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded'
import React from 'react'
import { StoreItem } from '../../../models/StoreItem'
import { getCurrencySymbol } from '../../../utils/getCurrencySymbol'
import { DeliveyDate } from './DeliveryDate'
import { useDispatch, useSelector } from 'react-redux'
import { setItemRecievedStatus } from '../../../actions/itemsActions'
import SentimentDissatisfiedRoundedIcon from '@material-ui/icons/SentimentDissatisfiedRounded';
import { useConvertCurrency } from '../../../custom-hooks/useConvertCurrency'
import { AppState } from '../../../store/store'
import { UserSettings } from '../../../reducers/userSettingsReducer'

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
    const { preferredCurrency } = useSelector<AppState, UserSettings>(x => x.userSettings)
    const dispatch = useDispatch()
    const convertCurrency = useConvertCurrency()
    const { id, recieved, name, store, price, priceCurrency, deliveryDateISO } = item

    const priceInPreferredCurrency = convertCurrency(price, priceCurrency)

    return <Card className={classes.root} elevation={4}>
        <CardContent>
            <Grid container direction='row' justify='space-between'>
                <Grid item>
                    <Typography variant='subtitle1'>{name}</Typography>
                    <Typography variant='subtitle2'>{priceInPreferredCurrency.toFixed(2)}{getCurrencySymbol(preferredCurrency)}</Typography>
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