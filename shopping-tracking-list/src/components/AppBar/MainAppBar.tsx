import { AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Fragment, useState } from 'react';
import { Navigator } from './Navigator';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
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
                <IconButton edge="start" className={classes.icon} onClick={() => setNavigationOpen(true)}>
                    <MenuIcon />
                </IconButton>
                <Typography>{getTitle(location.pathname)}</Typography>
            </Toolbar>
        </AppBar>
        <div className={classes.offset} />
        <Navigator open={navigationOpen} onClose={() => setNavigationOpen(false)} />
    </Fragment>
}   