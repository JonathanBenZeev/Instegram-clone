import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import { StoryIndex } from './pages/StoryIndex'
// import './App.css'

export const RootCmp: FC = () => {
  return (
    <div className='App'>
      {/* <AppHeader /> */}
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/story' element={<StoryIndex />} />
        </Routes>
      </main>
    </div>
  )
}
