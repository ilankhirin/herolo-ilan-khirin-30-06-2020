import { AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Fragment, useState } from 'react';
import { Navigator } from './Navigator';
import { useLocation } from 'react-router-dom';
import { UserPreferredCurrencySelector } from './UserPreferredCurrencySelector';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbarItem: {
            marginTop: 'auto',
            marginBottom: 'auto'
        },
        icon: {
            marginTop: 'auto',
            marginBottom: 'auto',
            color: 'white'
        },
        offset: theme.mixins.toolbar
    }),
);

const getTitle = (location: string) => {
    switch (location) {
        case '/recieved':
            return 'Recieved'
        case '/bought':
        case '/':
        default:
            return 'Bought'
    }
}

export const MainAppBar = () => {
    const classes = useStyles()
    const [navigationOpen, setNavigationOpen] = useState(false)
    const location = useLocation()

    return <Fragment>
        <AppBar position='fixed'>
            <Toolbar>
                <Grid container direction='row' justify='space-between'>
                    <IconButton edge="start" className={classes.icon} onClick={() => setNavigationOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.toolbarItem} variant='h5'>{getTitle(location.pathname)}</Typography>
                    <Grid item className={classes.toolbarItem}>
                        <UserPreferredCurrencySelector />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        <div className={classes.offset} />
        <Navigator open={navigationOpen} onClose={() => setNavigationOpen(false)} />
    </Fragment>
}   