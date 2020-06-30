import { Action } from "redux";
import { CurrencyRates } from "../reducers/currencyRatesReducer";

export const UPDATE_CURRENCY_RATES = 'UPDATE_CURRENCY_RATES'

export interface UpdateCurrencyRatesAction extends Action<typeof UPDATE_CURRENCY_RATES> {
    rates: CurrencyRates
}

export const updateCurrencyRates = (rates: CurrencyRates): UpdateCurrencyRatesAction => ({
    type: UPDATE_CURRENCY_RATES,
    rates
})