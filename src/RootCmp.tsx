import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
// import { HomePage } from './pages/HomePage'
import { StoryIndex } from './pages/StoryIndex'
import { SideBar } from './cmps/SideBar'
// import './App.css'

export const RootCmp: FC = () => {
  return (
    <div className='main-container'>
      <SideBar />
      <main className='m-a'>
        <Routes>
          {/* <Route path='/' element={<HomePage />} /> */}
          <Route path='/' element={<StoryIndex />} />
        </Routes>
      </main>
    </div>
  )
}
