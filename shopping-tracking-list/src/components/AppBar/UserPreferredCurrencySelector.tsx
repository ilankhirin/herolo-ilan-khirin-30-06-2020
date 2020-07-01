import { createStyles, Grid, makeStyles, MenuItem, Select, Theme, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserPreferredCurrency } from '../../actions/userSettingsActions'
import { Currency, currencyTypes } from '../../models/Currency'
import { UserSettings } from '../../reducers/userSettingsReducer'
import { AppState } from '../../store/store'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        select: {
            marginLeft: theme.spacing(1),
        },
        label: {
            marginTop: 'auto',
            marginBottom: 'auto',
            color: 'greenyellow'
        },
        selectIcon: {
            color: 'white'
        },
        selectText: {
            color: 'white'
        }
    }),
);

interface Props {
    className?: string
}

export const UserPreferredCurrencySelector = (props: Props) => {
    const { className } = props
    const userSettings = useSelector<AppState, UserSettings>(x => x.userSettings)
    const classes = useStyles()
    const dispatch = useDispatch()

    return <Grid className={className} container direction='row'>
        <Grid item className={classes.label}>
            <Typography>Select Preferable Currency</Typography>
        </Grid>
        <Grid item className={classes.select}>
            <Select value={userSettings.preferredCurrency}
                classes={{ icon: classes.selectIcon, select: classes.selectText }}
                disableUnderline
                onChange={e => dispatch(setUserPreferredCurrency(e.target.value as Currency))}>
                {currencyTypes.map(x => <MenuItem key={x} value={x}>{x}</MenuItem>)}
            </Select>
        </Grid>
    </Grid>
}