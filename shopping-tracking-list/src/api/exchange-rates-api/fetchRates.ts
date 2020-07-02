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
        const url = process.env.REACT_APP_EXCHANGE_RATES_URL
        if (!url) {
            throw new Error("Exchange rates api isn't defined")
        }
        const response = await fetch(url)
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

    const fetchInterval = Number(process.env.REACT_APP_EXCHANGE_RATES_API_FETCH_INTERVAL_SECONDS) * 1000
    setTimeout(fetchRatesLoop, fetchInterval)
}