export enum UserActionType {
    SET_USER_MSG = 'SET_USER_MSG',
    SPEND_BALANCE = 'SPEND_BALANCE'
}

export interface SpendBalanceAction {
    type: UserActionType.SPEND_BALANCE
    amount: number
}

export interface SetUserMsgAction {
    type: UserActionType.SET_USER_MSG
    userMsg: UserMsg | null
}

export type UserAction = SpendBalanceAction | SetUserMsgAction