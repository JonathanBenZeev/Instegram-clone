import { Robot, RobotFilter } from './../../../interfaces/robot';
export enum RobotActionType {
    SET_ROBOTS = 'SET_ROBOTS',
    ADD_ROBOT = 'ADD_ROBOT',
    REMOVE_ROBOT = 'REMOVE_ROBOT',
    UPDATE_ROBOT = 'UPDATE_ROBOT',
    SET_FILTER_BY = 'SET_FILTER_BY'
}



// Action interfaces
export interface AddRobotAction {
    type: RobotActionType.ADD_ROBOT;
    robot: Robot;
}

export interface RemoveRobotAction {
    type: RobotActionType.REMOVE_ROBOT;
    robotId: string;
}

export interface SetFilterByAction {
    type: RobotActionType.SET_FILTER_BY;
    filterBy: RobotFilter;
}

export interface SetRobotsAction {
    type: RobotActionType.SET_ROBOTS;
    robots: Robot[];
}

interface UpdateRobotAction {
    type: RobotActionType.UPDATE_ROBOT;
    robot: Robot;
}

export type RobotAction =
    | AddRobotAction
    | RemoveRobotAction
    | SetFilterByAction
    | SetRobotsAction
    | UpdateRobotAction