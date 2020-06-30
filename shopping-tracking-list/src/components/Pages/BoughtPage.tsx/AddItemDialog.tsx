import { Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import { NewItemForm } from './NewItemForm';
import { StoreItem } from '../../../models/StoreItem';

const useStyles = makeStyles((theme: Theme) => createStyles({
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    }
}))

interface Props {
    open: boolean
    onClose(): void
}

export const AddItemDialog = (props: Props) => {
    const { open, onClose } = props
    const [newItem, setNewItem] = useState<Partial<StoreItem>>({})
    const classes = useStyles()

    return <Dialog open={open} disableBackdropClick onClose={onClose}>
        <DialogTitle disableTypography>
            <Typography variant='h6'>New Item</Typography>
            <IconButton className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent dividers>
            <NewItemForm onChange={setNewItem} storeItem={newItem} />
        </DialogContent>
        <DialogActions>
            <Button>Cancel</Button>
            <Button disabled>Add</Button>
        </DialogActions>
    </Dialog>
}