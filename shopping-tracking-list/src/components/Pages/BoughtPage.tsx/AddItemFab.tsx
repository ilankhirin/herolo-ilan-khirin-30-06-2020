import { createStyles, Fab, makeStyles, Theme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddRounded';
import React, { Fragment, useState } from 'react';
import { AddItemDialog } from './AddItemDialog';

const useStyles = makeStyles((theme: Theme) => createStyles({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(4),
        right: theme.spacing(4)
    },
    fabIcon: {
        marginRight: theme.spacing(1)
    }
}))

interface Props {

}

export const AddItemFab = (props: Props) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const classes = useStyles()

    const closeDialog = () => setDialogOpen(false)
    const openDialog = () => setDialogOpen(true)

    return <Fragment>
        <Fab color='primary' variant='extended' className={classes.fab} onClick={openDialog}>
            <AddIcon className={classes.fabIcon} />
            Add Item
        </Fab>
        {dialogOpen && <AddItemDialog open={dialogOpen} onClose={closeDialog} />}
    </Fragment>
}