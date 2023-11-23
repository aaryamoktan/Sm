import { Nevbar } from "../../Component/Nevbar/Nevbar"
import { Footer } from "../../Component/footer/Footer"
export const Friends = ()=>
{
    return(
        <><Nevbar/>
           <div>
           <div className="friendsContainer">
            <div className="friendsleft">left </div>
            <div className="friendsright">
                <div className="friendslist">

                </div>
                
            </div>
           </div></div> 
           <Footer/>
        </>
    )
}