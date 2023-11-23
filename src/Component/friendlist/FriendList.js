import React from 'react'
import { List } from '../../friendsl/Friendl'
const FriendList = () => {
  return (
    <>
    <div className='fC'>
      {List&&List.map((ele)=>
      {
        return(
          <>
          <div className='friendListc'>
          <div className='name'>{ele.name}</div>
            <div className='image'>
              <img src={ele.pic}/>
            </div>
            <button>Add Friends</button>
            </div>
          </>
        )
      })}
      </div>
    </>
  )
}
export default FriendList