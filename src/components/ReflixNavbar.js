import {Link} from "react-router-dom" 

export default function ReflixNavBar({usersData, setUsersData}){
    return (
        <div className="header">
            <div className="nav-container">
                <Link to={"/"}><button className="_btn" onClick={()=>setUsersData({...usersData, activeUserId: 0})}>Home</button></Link>
                <Link to={"/catalog"}><button className="_btn" onClick={()=>setUsersData({...usersData, activeUserId:0})}>Catalog</button></Link>
            </div>
            <Link to={"/"}><button className="_btn logo" onClick={()=>setUsersData({...usersData, activeUserId: 0})}>REFLIX</button></Link>
        </div>
    )
}