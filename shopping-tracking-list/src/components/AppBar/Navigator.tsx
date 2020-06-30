import { createStyles, Drawer, List, makeStyles, Theme } from '@material-ui/core';
import PlaylistAddCheckRoundedIcon from '@material-ui/icons/PlaylistAddCheckRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import React from 'react';
import { NavigationItem } from './NavigationItem';

const useStyles = makeStyles((theme: Theme) => createStyles({
    list: {
        width: theme.spacing(32)
    }
}))

interface Props {
    open: boolean
    onClose(): void
}

export const Navigator = (props: Props) => {
    const { open, onClose } = props
    const classes = useStyles()

    return <Drawer anchor='left' open={open} onClose={onClose}>
        <List className={classes.list}>
            <NavigationItem icon={<ShoppingCartRoundedIcon />} title="Bought" route="/bought" onClick={onClose} />
            <NavigationItem icon={<PlaylistAddCheckRoundedIcon />} title="Recieved" route="/recieved" onClick={onClose} />
        </List>
    </Drawer>
}