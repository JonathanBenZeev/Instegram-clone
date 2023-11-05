import { Robot, RobotFilter } from '../interfaces/robot'
import { storageService } from './async-storage.service'
import { utilService } from './util.service'

export const robotService = {
    query,
    save,
    remove,
    getById,
    createRobot,
    getDefaultFilter,
    getNextRobotId
}

const STORAGE_KEY = 'robots'
_createRobots()

async function query(): Promise<Robot[]> {
 return await storageService.query<Robot>(STORAGE_KEY)
    // if (filterBy) {
    //     let { type, maxBattery, minBattery, model } = filterBy
    //     if (!maxBattery) maxBattery = Infinity
    //     if (!minBattery) minBattery = 0
    //     robots = robots.filter(robot =>
    //         robot.type.toLowerCase().includes(type.toLowerCase())
    //         && robot.model.toLowerCase().includes(model.toLowerCase())
    //         && (robot.batteryStatus < maxBattery)
    //         && robot.batteryStatus > minBattery)
    // }
    // return robots
}

function getById(robotId: string): Promise<Robot> {
    return storageService.get<Robot>(STORAGE_KEY, robotId)
}

function remove(robotId: string): Promise<void> {
    return storageService.remove(STORAGE_KEY, robotId)
}

function save(robotToSave: Robot): Promise<Robot> {
    if (robotToSave._id) {
        return storageService.put(STORAGE_KEY, robotToSave)
    } else {
        return storageService.post(STORAGE_KEY, robotToSave)
    }
}

function createRobot(model = '', type = ''): Partial<Robot> {
    return {
        model,
        type,
        batteryStatus: 100
    }
}

async function getNextRobotId(robotId: string) {
    const robots = await storageService.query<Robot>(STORAGE_KEY)
    const idx = robots.findIndex(robot => robot._id === robotId)
    let nextIdx = idx + 1
    if (nextIdx === robots.length) nextIdx = 0
    return robots[nextIdx]._id
}

function getDefaultFilter(): RobotFilter {
    return {
        model: '',
        type: '',
        minBattery: 0,
        maxBattery: 0,
    }
}

function _createRobots(): void {
    let robots = utilService.loadFromStorage(STORAGE_KEY)
    if (!robots || !robots.length) {
        robots = [
            { _id: 'r2', model: 'Salad-O-Matic', batteryStatus: 80, type: 'Cooking' },
            { _id: 'r3', model: 'Dusty', batteryStatus: 100, type: 'Cleaning' },
            { _id: 'r1', model: 'Dominique Sote', batteryStatus: 100, type: 'Pleasure' },
            { _id: 'r4', model: 'DevTron', batteryStatus: 40, type: 'Office' }
        ]
        utilService.saveToStorage(STORAGE_KEY, robots)
    }
}


