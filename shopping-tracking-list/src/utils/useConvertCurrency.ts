import { useSelector } from "react-redux"
import { Currency } from "../models/Currency"
import { CurrencyRatesState } from "../reducers/currencyRatesReducer"
import { AppState } from "../store/store"
import { UserSettings } from "../reducers/userSettingsReducer"

type ConvertToCurrency = (price: number, priceCurrency: Currency, desiredCurrency?: Currency) => number

export const useConvertCurrency = (): ConvertToCurrency => {
    const { rates } = useSelector<AppState, CurrencyRatesState>(x => x.currencyRates)
    const { preferredCurrency } = useSelector<AppState, UserSettings>(x => x.userSettings)

    return (price: number, priceCurrency: Currency, desiredCurrency?: Currency): number => {
        const targetCurrency = desiredCurrency ?? preferredCurrency
        const priceInBaseCurrency = price / rates[priceCurrency]

        return priceInBaseCurrency * rates[targetCurrency]
    }
}