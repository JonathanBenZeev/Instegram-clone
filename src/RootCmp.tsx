import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
// import { HomePage } from './pages/HomePage'
import { StoryIndex } from './pages/StoryIndex'
import { SideBar } from './cmps/SideBar'
import { LoginSignup } from './pages/LoginSignup'
import { StoryDetails } from './pages/StoryDetails'
// import './App.css'

export const RootCmp: FC = () => {
  return (
    <div className='main-container'>
      <SideBar />
      <main className='m-a'>
        <Routes>
          <Route path='/post' element={<StoryIndex />}>
            <Route path='/post/:storyId' element={<StoryDetails />} />
          </Route>
          {/* <Route path='/' element={<HomePage />} /> */}
          <Route path='/' element={<StoryIndex />} />
          <Route path='/signup' element={<LoginSignup />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </main>
    </div>
  )
}
