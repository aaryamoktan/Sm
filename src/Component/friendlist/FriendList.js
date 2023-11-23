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
            {ele.name}
            </div>
          </>
        )
      })}
      </div>
    </>
  )
}
export default FriendList