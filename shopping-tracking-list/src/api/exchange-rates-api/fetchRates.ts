import { store } from "../../store/store"
import { updateCurrencyRates } from "../../actions/currencyRatesActions"
import { CurrencyRates } from "../../reducers/currencyRatesReducer"
import { ALERT_FAILED_TO_FETCH_EXCHANGE_RATES_ID, alertFailedToFetchExchangeRates, turnOffFailedToFetchExchangeRates } from "../../actions/alertsActions"

interface ExchangeRatesApiResponse {
    rates: CurrencyRates
}

const checkIfFetchRatesAlertIsPresent = () => {
    const { alerts } = store.getState().alertsState
    return alerts.some(x => x.id === ALERT_FAILED_TO_FETCH_EXCHANGE_RATES_ID)
}

export const fetchRatesLoop = async () => {
    const { dispatch } = store

    try {
        const response = await fetch('https://api.exchangeratesapi.io/latest')
        const data = await response.json() as ExchangeRatesApiResponse

        if (checkIfFetchRatesAlertIsPresent()) {
            dispatch(turnOffFailedToFetchExchangeRates())
        }

        dispatch(updateCurrencyRates(data.rates))
    } catch {
        if (!checkIfFetchRatesAlertIsPresent()) {
            dispatch(alertFailedToFetchExchangeRates())
        }
    }

    //TODO: set to be configurable
    setTimeout(fetchRatesLoop, 3 * 1000)
}