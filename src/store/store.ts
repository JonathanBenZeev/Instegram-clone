import { combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { RobotState, robotReducer } from './reducers/robot.reducer'
import { UserState, userReducer } from './reducers/user.reducer'
import { RobotAction } from './actions/robot/interfaces'
import { UserAction } from './actions/user/interfaces'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export interface RootState {
    robotModule: RobotState
    userModule: UserState
}

const rootReducer = combineReducers<RootState>({
    robotModule: robotReducer,
    userModule: userReducer
})

export const store = createStore<RootState, RobotAction | UserAction, unknown, unknown>(rootReducer, composeEnhancers());

(window as any).gStore = store