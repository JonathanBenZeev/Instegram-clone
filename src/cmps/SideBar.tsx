import { FC } from 'react'
import { HomeSvg,SearchSvg ,ExploreSvg,ReelsSvg,MessageSvg,HeartSvg,CreateSvg} from './Svg'

export const SideBar: FC = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-item'> <span><HomeSvg/></span> <span>Home</span></div>
      <div className='sidebar-item'> <span><SearchSvg/></span> Search</div>
      <div className='sidebar-item'> <span><ExploreSvg/></span>Explore</div>
      <div className='sidebar-item'> <span><ReelsSvg/></span>Reels</div>
      <div className='sidebar-item'> <span><MessageSvg/></span>Messages</div>
      <div className='sidebar-item'> <span><HeartSvg/></span>Notifications</div>
      <div className='sidebar-item'> <span><CreateSvg/></span>Create</div>
      <div className='sidebar-item'> <span><HomeSvg/></span>Profile</div>
      <div className='sidebar-item'> <span><HomeSvg/></span>Threads</div>
      <div className='sidebar-item'> <span><HomeSvg/></span>More</div>
    </div>
  )
}
