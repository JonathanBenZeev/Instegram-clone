import { robotService } from "../../../services/robot.service";
import { store } from "../../store";
import { AddRobotAction, RemoveRobotAction, RobotActionType, SetRobotsAction } from "./interfaces";


export async function loadRobots() {
    try {
        const filterBy = store.getState().robotModule.filterBy
        const robots = await robotService.query(filterBy)
        store.dispatch<SetRobotsAction>({
            type: RobotActionType.SET_ROBOTS,
            robots
        })
    } catch (error) {
        console.log('error:', error)
    }

}

export async function removeRobot(robotId: string) {
    try {
        await robotService.remove(robotId)
        store.dispatch<RemoveRobotAction>({
            type: RobotActionType.REMOVE_ROBOT,
            robotId
        })
    } catch (error) {
        console.log('error:', error)
    }

}

export async function setFilterBy(filterBy: RobotFilter) {
    store.dispatch({ type: RobotActionType.SET_FILTER_BY, filterBy })
}
