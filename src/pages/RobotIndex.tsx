import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { RobotList } from '../cmps/RobotList'
// import { RobotFilter } from '../cmps/RobotFilter'
import { Link } from 'react-router-dom'
// import { NiceButton } from '../cmps/NiceButton'
import { loadRobots, removeRobot, } from '../store/actions/robot/robot.actions'
import { useSelector } from 'react-redux'
// import { spendBalance } from '../store/actions/user/user.actions'
import { RootState } from '../store/store'

export function RobotIndex() {

    const robots = useSelector((state: RootState) => state.robotModule.robots)
    // const filterBy = useSelector((state: RootState) => state.robotModule.filterBy)
    // const [popo, setPopo] = useState(false)


    useEffect(() => {
        loadRobots()
    }, [])


    // function onChangeFilter(filterBy: RobotFilter) {
    //     setFilterBy(filterBy)
    //     loadRobots()
    // }


    function onRemoveRobot(robotId: string) {
        removeRobot(robotId)
    }

    // function onSpendBalance() {
    //     spendBalance(5)
    // }

    // function onTogglePopo() {
    //     setPopo(prevPopo => !prevPopo)
    // }


    // function getBigNum() {
    //     let sum = 0
    //     for (let i = 0; i < 10 ** 8 * 6; i++) {
    //         sum += i
    //     }

    //     return sum * (robots?.length || 1)
    // }

    // const Icon = () => <span>🏆</span>

    // const bigNum = useMemo(() => {
    //     let sum = 0
    //     for (let i = 0; i < 10 ** 8 * 6; i++) {
    //         sum += i
    //     }
    //     return sum * (robots?.length || 1)
    // }, [robots?.length])

    if (!robots) return <div>Loading...</div>
    return (
        <section className="robot-index">
            {'bigNum'}
            {/* <RobotFilter onChangeFilter={onChangeFilter} filterBy={filterBy} /> */}
            {/* <Link to="/robot/edit">Add</Link> */}
            <RobotList onRemoveRobot={onRemoveRobot} robots={robots} />
{/* 
            <NiceButton icon={Icon} onClick={() => console.log('Nice btn clicked!')} className='nice-button'>
                Nice Button!
            </NiceButton>

            <NiceButton onClick={onSpendBalance} className='nice-button'>Spend Balance</NiceButton>
            <NiceButton className='nice-button' onClick={onTogglePopo}  >Toggle Popo ({popo + ''})</NiceButton> */}
        </section>
    )
}
