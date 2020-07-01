import { GridList } from '@material-ui/core'
import React from 'react'
import { StoreItem } from '../../models/StoreItem'
import { ItemCard } from './ItemCard'

interface Props {
    items: StoreItem[]
}

export const ItemsList = (props: Props) => {
    const { items } = props

    return <GridList>
        {items.map(x => <ItemCard key={x.id} item={x} />)}
    </GridList>
}