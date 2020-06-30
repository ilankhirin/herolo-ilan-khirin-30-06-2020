import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { UserSettings, userSettingsReducer } from "../reducers/userSettingsReducer";

interface AppState {
    userSettings: UserSettings
}

const rootReducer = combineReducers<AppState>({
    userSettings: userSettingsReducer
})

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(logger))
export const persistor = persistStore(store)
