import { applyMiddleware, combineReducers, createStore, Middleware } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { UserSettings, userSettingsReducer } from "../reducers/userSettingsReducer";
import { CurrencyRatesState, currencyRatesReducer } from "../reducers/currencyRatesReducer";
import { ItemsState, itemsReducer } from "../reducers/itemsReducer";
import { AlertsState, alertsReducer } from "../reducers/alertsReducer";

export interface AppState {
    userSettings: UserSettings,
    currencyRates: CurrencyRatesState,
    itemsState: ItemsState
    alertsState: AlertsState
}

const rootReducer = combineReducers<AppState>({
    userSettings: userSettingsReducer,
    currencyRates: currencyRatesReducer,
    itemsState: itemsReducer,
    alertsState: alertsReducer
})

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware: Middleware[] = []
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}

export const store = createStore(persistedReducer, applyMiddleware(...middleware))
export const persistor = persistStore(store)
