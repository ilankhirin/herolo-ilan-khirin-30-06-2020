import { Currency } from "./userSettingsReducer";
import { Action } from "redux";
import { UPDATE_CURRENCY_RATES, UpdateCurrencyRatesAction } from "../actions/currencyRatesActions";

export type CurrencyRates = Record<Currency, number>

export interface CurrencyRatesState {
    rates: CurrencyRates
}

const intialState: CurrencyRatesState = {
    rates: {
        ILS: 1,
        USD: 1
    }
}

export const currencyRatesReducer = (state: CurrencyRatesState = intialState, action: Action): CurrencyRatesState => {
    switch (action.type) {
        case UPDATE_CURRENCY_RATES: {
            const { rates } = action as UpdateCurrencyRatesAction

            return {
                ...state,
                rates
            }
        }
        default:
            return state
    }
}