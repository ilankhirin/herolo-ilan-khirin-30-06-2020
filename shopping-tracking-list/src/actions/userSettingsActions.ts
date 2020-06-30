import { Action } from "redux";
import { Currency } from "../reducers/userSettingsReducer";

export const SET_USER_PREFERRED_CURRENCY = 'SET_USER_PREFERRED_CURRENCY'

export interface SetUserPreferredCurrenyAction extends Action<typeof SET_USER_PREFERRED_CURRENCY> {
    currency: Currency
}

export const setUserPreferredCurrency = (currency: Currency): SetUserPreferredCurrenyAction => ({
    type: SET_USER_PREFERRED_CURRENCY,
    currency
})