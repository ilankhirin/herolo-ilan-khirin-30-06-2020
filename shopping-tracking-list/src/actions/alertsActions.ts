import { Action } from "redux";
import { GlobalAlert } from "../reducers/alertsReducer";

export const ADD_ALERT = 'ADD_ALERT'

export interface AddAlertAction extends Action<typeof ADD_ALERT> {
    alert: GlobalAlert
}

export const addAlert = (alert: GlobalAlert): AddAlertAction => ({
    type: ADD_ALERT,
    alert
})


export const REMOVE_ALERT = 'REMOVE_ALERT'

export interface RemoveAlertAction extends Action<typeof REMOVE_ALERT> {
    alertId: string
}

export const removeAlert = (alertId: string): RemoveAlertAction => ({
    type: REMOVE_ALERT,
    alertId
})


export const ALERT_FAILED_TO_FETCH_EXCHANGE_RATES_ID = 'ALERT_FAILED_TO_FETCH_EXCHANGE_RATES'

export const alertFailedToFetchExchangeRates = (): AddAlertAction => addAlert({
    id: ALERT_FAILED_TO_FETCH_EXCHANGE_RATES_ID,
    message: 'An error occured while trying to fetch exchange rates, Please check your connectivity(Prices might not be up to date)',
    severity: 'warning'
})

export const turnOffFailedToFetchExchangeRates = (): RemoveAlertAction => removeAlert(ALERT_FAILED_TO_FETCH_EXCHANGE_RATES_ID)