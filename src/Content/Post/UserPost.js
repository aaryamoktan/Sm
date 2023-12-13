import React from 'react'
import { AiFillHeart, AiOutlineMessage } from "react-icons/ai";
const UserPost = () => {
  return (
    <>
        <div className="homeMainpost">
              <div className='homeMainpostsub'>
                <div className='homeSS'>
                  <div className='name'>
                    <p>Aarya Moktan</p><i>10-07-1998</i>
                  </div>
                  <div className='img'>
                    <img src="https://wallpapercave.com/wp/wp5215987.jpg" />
                  </div>
                  <div className='likeordislike'>
                    <p className='like'>{<AiFillHeart style={{ color: "red", fontSize: "30px" }} />}</p> <p class="dislike">{<AiOutlineMessage style={{ color: "gray", marginLeft: "30px", fontSize: "30px" }} />}</p>
                  </div>

                </div>
              </div>
            </div>
    </>
  )
}

export default UserPost