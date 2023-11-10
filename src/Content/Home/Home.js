import React, { useState } from 'react';
import {AiFillHeart,AiOutlineMessage  } from "react-icons/ai";
import { Nevbar } from '../../Component/Nevbar/Nevbar'
import { Footer } from '../../Component/footer/Footer'
const Home = () => {
  const [file,setfile]=useState();
  const [text,settext] = useState();
  const date =new Date();
  const submit = ()=>
  {

  }
  return (
    <div>
    <Nevbar/>
    <div className='homeContainer'>
      <div className='homeInner1'>
        <div className='homeInnerPost'>
          <div className='homrInnerPost1'>
          <input className='inputc' onChange={(e)=>
          settext(e.target.value)} style={{width:"90%",height:"17vh",marginTop:"10px"}}/>
          <input type="file" className='file' onChange={(e)=>
          setfile(e.target.value)}/>
          <button onClick={submit}>Post</button>
          </div>
          <div className="homeMainpost">
            <div className='homeMainpostsub'>
            <div className='homeSS'>
              <div className='name'>
                <p>Aarya Moktan</p><i>10-07-1998</i>
              </div>
              <div className='img'>
              <img src="https://wallpapercave.com/wp/wp5215987.jpg"/>
              </div>
              <div className='likeordislike'>
                <p className='like'>{<AiFillHeart style={{color:"red" ,fontSize:"30px"}}/>}</p> <p class="dislike">{<AiOutlineMessage style={{color:"gray",marginLeft:"30px",fontSize:"30px"}}/>}</p>
              </div>
              
            </div>
            </div>


          </div>
        </div>
      </div>
      <div className='homeInner2'>
        <div className='news_feeds'>
        <div className='imgSection'>
        <img src="https://media.gettyimages.com/id/1289727521/photo/news-reporter-live-broadcasting-on-road.jpg?s=612x612&w=0&k=20&c=8YdimKQ8rGGIqI4C1etxIvkF8E24DzXiYMON8WvpK7I="/>
          </div>
        </div>
      </div>
    </div>
    <Footer/></div>
  )
}

export default Home