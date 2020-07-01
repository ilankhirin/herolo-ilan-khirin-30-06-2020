import { Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import { NewItemForm } from './NewItemForm';
import { StoreItem } from '../../../models/StoreItem';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/store';
import { UserSettings } from '../../../reducers/userSettingsReducer';

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
    const userSettings = useSelector<AppState, UserSettings>(x => x.userSettings)
    const [newItem, setNewItem] = useState<Partial<StoreItem>>({ priceCurrency: userSettings.preferredCurrency })
    const classes = useStyles()

    const enableAdding = newItem.name && newItem.deliveryDateISO && newItem.price && newItem.store

    return <Dialog open={open} disableBackdropClick onClose={onClose}>
        <DialogTitle disableTypography>
            <Typography variant='h6'>New Item</Typography>
            <IconButton className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent dividers>
            <NewItemForm onChange={x => setNewItem({ ...newItem, ...x })} storeItem={newItem} />
        </DialogContent>
        <DialogActions>
            <Button>Cancel</Button>
            <Button disabled={!enableAdding}>Add</Button>
        </DialogActions>
    </Dialog>
}