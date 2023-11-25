import { Link } from "react-router-dom"
export const Right = () => {
    return (
        <>
            <div className="rightContainer">
                <div className="right">
                    <ul>
                    <h1>Create</h1>
                        <li><Link to="" style={{ "textDecoration": "none" }}>Post</Link></li>
                        <li><Link to="" style={{ "textDecoration": "none" }}>Story</Link></li>
                        <li><Link to="" style={{ "textDecoration": "none" }}>Reels</Link></li>
                        <li><Link to="" style={{ "textDecoration": "none" }}>Life Events</Link></li>
                        <li><Link to="" style={{ "textDecoration": "none" }}>Page</Link></li>
                        <li><Link to="" style={{ "textDecoration": "none" }}>Ad</Link></li>
                        <li><Link to="" style={{ "textDecoration": "none" }}>Group</Link></li>
                        <li><Link to="" style={{"textDecoration":"none"}}>Events</Link></li>
                        <li><Link to="" style={{"textDecoration":"none"}}>Market</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}