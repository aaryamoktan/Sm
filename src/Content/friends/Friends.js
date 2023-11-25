import { Nevbar } from "../../Component/Nevbar/Nevbar"
import { Footer } from "../../Component/footer/Footer"
import FriendList from "../../Component/friendlist/FriendList"
export const Friends = ()=>
{
    return(
        <><Nevbar/>
           <div>
           <div className="friendsContainer">
            
            <div className="friendsright">
                <div className="friendslist">
                <FriendList/>
                </div>
                
            </div>
           </div></div> 
           <Footer/>
        </>
    )
}