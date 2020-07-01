import { TextField } from '@material-ui/core';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import React from 'react';

interface Props {
    value?: string
    onChange(value: string | null): void
    classes?: {
        root?: string
    }
}

//TODO: finish
const getStores = () => {
    return ['Amazon', 'Ebay']
}

const filter = createFilterOptions<string>();

export const StoreSelector = (props: Props) => {
    const { value, onChange, classes } = props

    return <Autocomplete value={value}
        onChange={(e, newValue) => {
            onChange(newValue)
        }}
        options={getStores()}
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