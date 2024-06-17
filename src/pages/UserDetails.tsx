import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { userService } from "../services/user.service"
import { User } from "../interfaces/user"


export const UserDetails = () => {

const [user, setUser] = useState<User | null>(null)
  const { username } = useParams()
  

  useEffect(() => {
    loadUser()
  }, [])


  const loadUser = async () => {
    if (!username) return
    try {
      const user = await userService.getByUsername(username)
      setUser(user)
    } catch (err) {
      // navigate('/post')
    }
  } 

  console.log(user);
  
  return (
    <section className='user-details'>
     {/* <UserHeader/> */}
    </section>
  )
}
