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
          <div className='news_list'>
          <h1>Today News</h1>
            <ul>
             
              <li><img src="https://idronline.org/wp-content/uploads/2023/11/Renewable-energy.jpg" alt="my image"/><a target="blank" href="https://idronline.org/article/climate-emergency/lay-of-the-land-a-road-map-for-the-renewable-energy-rookie/">Lay of the land: A road map for the renewable energy rookie</a></li>
              <li><img src="https://idronline.org/wp-content/uploads/2022/10/Humour-diwali.jpg.webp" alt="my image"/><a target="blank" href="https://idronline.org/article/humour/nonprofit-diwali-what-we-want-vs-what-we-get-nonprofit-humour/">Nonprofit Diwali: What we want vs what we get</a></li>
              <li><img src="https://idronline.org/wp-content/uploads/2023/06/snakes-and-ladders.jpg" alt="my image"/><a target="blank" href="https://idronline.org/features/gender/teaching-newly-married-women-how-to-navigate-patriarchal-spaces/">Teaching newly married women how to navigate patriarchal spaces</a></li>
              <li><img src="https://idronline.org/wp-content/uploads/2022/08/rural-women-take-part-in-a-boat-race-in-west-bengal_sudipto-rana_flickr_resize.jpg" alt="my image"/><a target="blank" href="https://idronline.org/features/leadership-talent/how-facilitative-leadership-can-help-rebuild-an-organisation-in-crisis/">The road to recovery</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/></div>
  )
}

export default Home