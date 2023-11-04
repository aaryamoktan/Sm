import { Link } from "react-router-dom";
export const Nevbar = ()=>
{
    return(
        <div className="nevbarMainContainer">
            <div className="nevbarInnerConatiner">
                <div className="nevbar1sIcon">
               <Link to="/" style={{textDecoration:"none",color:"black"}}>DMS</Link> 
                </div>
                <div className="neverMiddle">
                <ul>
                    <li>
                       <Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link>  
                    </li>
                    <li>
                     <Link to="/messanger" style={{textDecoration:"none",color:"black"}}>Messanger</Link>    
                    </li>
                    <li>
                       <Link to="/friends" style={{textDecoration:"none",color:"black"}}>Friends</Link>  
                    </li>
                </ul>

                </div>
                <div className="nevbarLeft">
                <ul>
                    <li>
                     <Link to="/menu" style={{textDecoration:"none",color:"black"}}>Menu</Link>
                    </li>
                    
                    <li>
                        <Link to="/notification" style={{textDecoration:"none",color:"black"}}>Notification</Link> 
                    </li>
                    <li>
                      <Link to="/profile" style={{textDecoration:"none",color:"black"}}>profile</Link>   
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}