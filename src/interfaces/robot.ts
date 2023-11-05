export interface Robot {
    _id: string
    model: string
    batteryStatus: number
    type: string
}
// interface PartialRobot {
//     id?: string
//     model?: string
//     batteryStatus?: number
//     type?: string
// }



export interface RobotFilter {
    type: string
    model: string
    minBatteryStatus: number
    maxBatteryStatus: number
}


export interface RobotParams {
    robotId: string
}