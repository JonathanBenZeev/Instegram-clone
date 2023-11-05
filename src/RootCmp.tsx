import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import { RobotIndex } from './pages/RobotIndex'
// import './App.css'

export const RootCmp: FC = () => {
  return (
    <div className='App'>
      {/* <AppHeader /> */}
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/robot' element={<RobotIndex />} />
        </Routes>
      </main>
    </div>
  )
}
