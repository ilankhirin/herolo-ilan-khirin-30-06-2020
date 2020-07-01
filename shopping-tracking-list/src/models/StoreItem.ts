import { Currency } from "./Currency";

export interface StoreItem {
    id: string
    name: string
    store: string
    deliveryDateISO: string
    price: number
    priceCurrency: Currency
}