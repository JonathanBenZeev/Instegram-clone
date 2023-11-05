import { User } from './../../interfaces/user';
import { UserAction, UserActionType } from "../actions/user/interfaces";

export interface UserState {
    loggedInUser: User
}

const initialState = {

    loggedInUser: {
        name: 'Jorji',
        balance: 100
    }

}

export function userReducer(state = initialState, action = {} as UserAction) {
    switch (action.type) {

        case UserActionType.SPEND_BALANCE: {
            const { loggedInUser } = state
            return {
                ...state,
                loggedInUser: { ...loggedInUser, balance: loggedInUser.balance - action.amount }
            }
        }

        default:
            return state;
    }
}