import { TextField } from '@material-ui/core';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import React, { useMemo } from 'react';
import { groupItemsByStore } from '../../utils/useGroupItemsByStore';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import { ItemsState } from '../../reducers/itemsReducer';

interface Props {
    value?: string
    onChange(value: string | null): void
    classes?: {
        root?: string
    }
}

const filter = createFilterOptions<string>();

export const StoreSelector = (props: Props) => {
    const { value, onChange, classes } = props
    const { items } = useSelector<AppState, ItemsState>(x => x.itemsState)

    const stores = useMemo(() => {
        const itemsByStore = groupItemsByStore(items)
        return Object.keys(itemsByStore)
    }, [items])

    return <Autocomplete value={value}
        onChange={(e, newValue) => {
            onChange(newValue)
        }}
        options={stores}
        selectOnFocus
        clearOnBlur
        filterOptions={(options, params) => {
            const filtered = filter(options, params)

            if (filtered.length) {
                return filtered
            } else {
                return [params.inputValue]
            }
        }}
        renderInput={(params) => <TextField {...params} classes={classes} label="Select Store" variant='outlined' />}
        freeSolo />
}