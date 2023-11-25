import { Link } from "react-router-dom"

export  const Left = ()=>
{
    return(
        <>
            <div className="leftContainer">
                <ul>
                    <li><input type="text" placeholder="serach"/></li>
                    <h1>Social</h1>
                    <li><Link to="" style={{"textDecoration":"none"}}>Events</Link></li>
                    <li><Link to="/friends" style={{"textDecoration":"none"}}>Find friends</Link></li>
                    <li><Link to="" style={{"textDecoration":"none"}}>Groups</Link></li>
                    <li><Link to="/home" style={{"textDecoration":"none"}}>News Feed</Link></li>
                    <li><Link to="" style={{"textDecoration":"none"}}>Feeds</Link></li>
                    <li><Link to="" style={{"textDecoration":"none"}}>Pages</Link></li>
                    <h1>Entertainment</h1>
                    <li><Link to="" style={{"textDecoration":"none"}}>Gaming Video</Link> </li>
                    <li><Link to="" style={{"textDecoration":"none"}}>Play Games</Link></li>
                    <li><Link to="" style={{"textDecoration":"none"}}>Video</Link></li>
                    
                </ul>
            </div>
        </>
    )
}