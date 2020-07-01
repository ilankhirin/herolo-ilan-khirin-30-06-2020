import { store } from "../../store/store"
import { updateCurrencyRates } from "../../actions/currencyRatesActions"
import { CurrencyRates } from "../../reducers/currencyRatesReducer"

interface ExchangeRatesApiResponse {
    rates: CurrencyRates
}

//TODO: handle error
export const fetchRatesLoop = async () => {
    const response = await fetch('https://api.exchangeratesapi.io/latest')
    const data = await response.json() as ExchangeRatesApiResponse

    const { dispatch } = store
    dispatch(updateCurrencyRates(data.rates))

    //TODO: set to be configurable
    setTimeout(fetchRatesLoop, 120 * 1000)
}