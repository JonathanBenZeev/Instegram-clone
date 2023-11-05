import { Robot, RobotFilter } from './../../interfaces/robot';
import { RobotAction, RobotActionType } from "../actions/robot/interfaces"


export interface RobotState {
    robots: Robot[] | null,
    filterBy: RobotFilter
}


const initialState: RobotState = {
    robots: null,
    filterBy: {
        model: '',
        type: '',
        minBatteryStatus: 0,
        maxBatteryStatus: 0
    }
}

export function robotReducer(state = initialState, action = {} as RobotAction) {
    switch (action.type) {
        case RobotActionType.SET_ROBOTS:
            return {
                ...state,
                robots: action.robots
            }
        case RobotActionType.ADD_ROBOT:
            return {
                ...state,
                robots: [...state.robots!, action.robot]
            }
        case RobotActionType.REMOVE_ROBOT:
            return {
                ...state,
                robots: state.robots!.filter(robot => robot._id !== action.robotId)
            }
        case RobotActionType.UPDATE_ROBOT:
            return {
                ...state,
                robots: state.robots!.map(robot => robot._id === action.robot._id ? action.robot : robot)
            }
        case RobotActionType.SET_FILTER_BY:
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }

        default:
            return state;
    }
}