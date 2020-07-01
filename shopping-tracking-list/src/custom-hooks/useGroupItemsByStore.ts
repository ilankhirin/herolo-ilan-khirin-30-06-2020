import { StoreItem } from "../models/StoreItem"
import { useMemo } from "react"

interface ItemsByStore {
    [storeName: string]: StoreItem[]
}

export const groupItemsByStore = (items: StoreItem[]): ItemsByStore => {
    const itemsByStore: ItemsByStore = {}

    items.forEach(x => {
        if (!itemsByStore[x.store]) {
            itemsByStore[x.store] = []
        }

        itemsByStore[x.store].push(x)
    })

    return itemsByStore
}

export const useGroupItemsByStore = (items: StoreItem[]): ItemsByStore => {
    const itemsByStore = useMemo(() => groupItemsByStore(items), [items])

    return itemsByStore
}