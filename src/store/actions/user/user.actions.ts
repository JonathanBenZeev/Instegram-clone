import { store } from "../../store";
import { SpendBalanceAction, UserActionType } from "./interfaces";


export async function spendBalance(amount: number) {
    try {
        store.dispatch<SpendBalanceAction>({ type: UserActionType.SPEND_BALANCE, amount })
    } catch (error) {
        console.log('error:', error)
    }
}