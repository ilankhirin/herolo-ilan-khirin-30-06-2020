import { Currency } from "../reducers/userSettingsReducer";

export interface StoreItem {
    id: string
    name: string
    deliveryDateISO: string
    price: number
    priceCurrency: Currency
    storeId: string
}