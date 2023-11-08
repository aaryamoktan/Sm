import { Link } from "react-router-dom";
import { AiFillHome,AiOutlineAliwangwang,AiOutlineUsergroupAdd,AiTwotoneRocket,AiOutlineUnorderedList } from "react-icons/ai";
export const Nevbar = ()=>
{
    const styleObj ={
        fontSize:"25px",
        margin:"25px"
    }
    return(
        <div className="nevbarMainContainer">
            <div className="nevbarInnerConatiner">
                <div className="nevbar1sIcon">
               <Link to="/home" style={{textDecoration:"none",color:"black"}}>DMS</Link> 
                </div>
                <div className="neverMiddle">
                <ul>
                    <li>
                       <Link to="/home" style={{textDecoration:"none",color:"black"}}>{<AiFillHome style={styleObj}/>}</Link>  
                    </li>
                    <li>
                     <Link to="/messanger" style={{textDecoration:"none",color:"black"}}>{<AiOutlineAliwangwang style={styleObj}/>}</Link>    
                    </li>
                    <li>
                       <Link to="/friends" style={{textDecoration:"none",color:"black"}}>{<AiOutlineUsergroupAdd style={styleObj}/>}</Link>  
                    </li>
                </ul>

                </div>
                <div className="nevbarLeft">
                <ul>
                    <li>
                     <Link to="/menu" style={{textDecoration:"none",color:"black"}}>{<AiOutlineUnorderedList style={styleObj}/>}</Link>
                    </li>
                    
                    <li>
                        <Link to="/notification" style={{textDecoration:"none",color:"black"}}>{<AiTwotoneRocket style={styleObj}/>}</Link> 
                    </li>
                    <li>
                      <Link to="/profile" style={{textDecoration:"none",color:"black"}}>Profile</Link>   
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}