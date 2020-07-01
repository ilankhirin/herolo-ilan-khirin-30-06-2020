import React from 'react'
import { StoreItem } from '../../../models/StoreItem'
import { StoreAggregationCard } from './StoreAggregationCard'

interface ItemsByStore {
    [storeName: string]: StoreItem[]
}

const groupItemsByStore = (items: StoreItem[]): ItemsByStore => {
    const itemsByStore: ItemsByStore = {}

    items.forEach(x => {
        if (!itemsByStore[x.store]) {
            itemsByStore[x.store] = []
        }

        itemsByStore[x.store].push(x)
    })

    return itemsByStore
}

interface Props {
    items: StoreItem[]
}

export const StoresAggregations = (props: Props) => {
    const { items } = props
    const itemsGroupedByStore = groupItemsByStore(items)

    return <div>
        {Object.keys(itemsGroupedByStore).map(x => <StoreAggregationCard key={x} store={x} items={itemsGroupedByStore[x]} />)}
    </div>
}