import { Currency } from "../models/Currency";

export const getCurrencySymbol = (currency: Currency) => {
    switch (currency) {
        case 'USD':
            return '$'
        case 'ILS':
            return '₪'
    }
}