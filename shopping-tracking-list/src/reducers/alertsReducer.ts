import { Action } from "redux"
import { ADD_ALERT, AddAlertAction, REMOVE_ALERT, RemoveAlertAction } from "../actions/alertsActions"

export interface GlobalAlert {
    id: string
    severity: 'error' | 'warning'
    message: string
}

export interface AlertsState {
    alerts: GlobalAlert[]
}

const initialState: AlertsState = {
    alerts: []
}

export const alertsReducer = (state: AlertsState = initialState, action: Action): AlertsState => {
    switch (action.type) {
        case ADD_ALERT: {
            const { alert } = action as AddAlertAction

            return {
                ...state,
                alerts: [...state.alerts, alert]
            }
        }
        case REMOVE_ALERT: {
            const { alertId } = action as RemoveAlertAction

            return {
                ...state,
                alerts: state.alerts.filter(x => x.id !== alertId)
            }
        }
        default:
            return state
    }
}