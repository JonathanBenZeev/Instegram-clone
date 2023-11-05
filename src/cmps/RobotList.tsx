
import React, { FC, memo } from 'react'
import { RobotPreview } from './RobotPreview'
import {Robot} from '../interfaces/robot'

export interface RobotListProps {
    robots: Robot[]
    onRemoveRobot: (ev: MouseEvent, robotId: string) => Promise<void>
}

export const RobotList: FC<RobotListProps> = memo(({ robots, onRemoveRobot }) => {


    return (
        <section className="robot-list simple-cards-grid">
            {robots.map(robot =>
                <RobotPreview
                    onRemoveRobot={onRemoveRobot}
                    key={robot._id}
                    robot={robot}
                />
            )}
        </section>
    )
})
