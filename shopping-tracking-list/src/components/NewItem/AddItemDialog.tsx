import { Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import { NewItemForm } from './NewItemForm';
import { StoreItem } from '../../models/StoreItem';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/store';
import { UserSettings } from '../../reducers/userSettingsReducer';
import { addNewItem } from '../../actions/itemsActions';
import { v4 as uuid } from 'uuid';

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
    const dispatch = useDispatch()

    const enableAdding = newItem.name && newItem.deliveryDateISO && newItem.price && newItem.priceCurrency && newItem.store

    const addItem = () => {
        if (newItem.name && newItem.deliveryDateISO && newItem.price && newItem.priceCurrency && newItem.store) {
            const finalItem: StoreItem = {
                name: newItem.name,
                store: newItem.store,
                price: newItem.price,
                priceCurrency: newItem.priceCurrency,
                deliveryDateISO: newItem.deliveryDateISO,
                recieved: false,
                id: uuid()
            }
            dispatch(addNewItem(finalItem))
            onClose()
        }
    }

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
            <Button onClick={onClose}>Cancel</Button>
            <Button disabled={!enableAdding} onClick={addItem}>Add</Button>
        </DialogActions>
    </Dialog>
}