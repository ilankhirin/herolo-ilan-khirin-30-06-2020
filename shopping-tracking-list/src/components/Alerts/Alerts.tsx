import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import React from 'react';
import { useSelector } from 'react-redux';
import { AlertsState } from '../../reducers/alertsReducer';
import { AppState } from '../../store/store';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position: 'absolute',
        bottom: theme.spacing(2),
        left: theme.spacing(2)
    }
}))

export const Alerts = () => {
    const { alerts } = useSelector<AppState, AlertsState>(x => x.alertsState)
    const classes = useStyles()

    return <div className={classes.root}>
        {alerts.map(x => <Alert severity={x.severity}>
            <AlertTitle>Warning</AlertTitle>
            {x.message}
        </Alert>)}
    </div>
}