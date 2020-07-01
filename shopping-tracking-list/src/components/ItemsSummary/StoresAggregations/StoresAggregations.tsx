import React, { Fragment } from 'react'
import { StoreItem } from '../../../models/StoreItem'
import { useGroupItemsByStore } from '../../../custom-hooks/useGroupItemsByStore'
import { StoreAggregationCard } from './StoreAggregationCard'

interface Props {
    items: StoreItem[]
}

export const StoresAggregations = (props: Props) => {
    const { items } = props
    const itemsGroupedByStore = useGroupItemsByStore(items)

    return <Fragment>
        {Object.keys(itemsGroupedByStore).map(x => <StoreAggregationCard key={x} store={x} items={itemsGroupedByStore[x]} />)}
    </Fragment>
}