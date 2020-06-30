import { Action } from 'redux'
import { SET_USER_PREFERRED_CURRENCY, SetUserPreferredCurrenyAction } from '../actions/userSettingsActions'

export type Currency = 'USD' | 'ILS'

export interface UserSettings {
    preferredCurrency: Currency
}

const initialState: UserSettings = {
    preferredCurrency: 'USD'
}

export const userSettingsReducer = (state: UserSettings = initialState, action: Action): UserSettings => {
    switch (action.type) {
        case SET_USER_PREFERRED_CURRENCY:
            const preferredCurrencyAction = action as SetUserPreferredCurrenyAction
            return {
                ...state,
                preferredCurrency: preferredCurrencyAction.currency
            }
        default:
            return state
    }
}