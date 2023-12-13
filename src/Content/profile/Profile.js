import React from 'react'
import Post from '../Post/Post'
import UserPost from '../Post/UserPost'
import { Nevbar } from '../../Component/Nevbar/Nevbar'
import { Footer } from '../../Component/footer/Footer'
const Profile = () => {
  return (
    <div>
      <Nevbar />
      <div className='profileContainer'>
        <div className='profileupperContainer'>
          <div className='profileImg'>
            <img src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/408017205_1844833092586617_8596942686378225434_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=lJe45-Fx7FUAX_NPiia&_nc_ht=scontent.fktm3-1.fna&oh=00_AfCGJIgwdLBxeTi8JLmgenwTOqQLCismwKlkzi-iDm-x1A&oe=657DDDC9" alt="my profile" />
            <p></p>
          </div>
        </div>
        <div className='userProfile'>
          <div className='userDetails'>
            <ul>
              <li>Aaryan Moktan </li>
              <li> 43 friends</li>
            </ul>
          </div>
        </div>
        <div className='pofilrPosts'>

        </div>
        <Post/>
        <UserPost/>

      </div>
      <Footer /></div>
  )
}

export default Profile