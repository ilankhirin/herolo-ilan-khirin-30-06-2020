import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { UserSettings, userSettingsReducer } from "../reducers/userSettingsReducer";
import { CurrencyRatesState, currencyRatesReducer } from "../reducers/currencyRatesReducer";
import { ItemsState, itemsReducer } from "../reducers/itemsReducer";

export interface AppState {
    userSettings: UserSettings,
    currencyRates: CurrencyRatesState,
    itemsState: ItemsState
}

const rootReducer = combineReducers<AppState>({
    userSettings: userSettingsReducer,
    currencyRates: currencyRatesReducer,
    itemsState: itemsReducer
})

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(logger))
export const persistor = persistStore(store)
