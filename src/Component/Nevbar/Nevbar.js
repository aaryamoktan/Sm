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
                      <Link to="/profile" style={{textDecoration:"none",color:"black"}}><img src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/408017205_1844833092586617_8596942686378225434_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=lJe45-Fx7FUAX_NPiia&_nc_ht=scontent.fktm3-1.fna&oh=00_AfCGJIgwdLBxeTi8JLmgenwTOqQLCismwKlkzi-iDm-x1A&oe=657DDDC9" alt="profileimg"/></Link>   
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}