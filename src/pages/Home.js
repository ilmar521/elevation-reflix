import Users from "../components/Users"

export default function Home({usersData, setUsersData}){
    return(
        <div className="home-container">
            <h1 className="home-title">Who is watching?</h1>
            <Users usersData={usersData} setUsersData={setUsersData}/>
        </div>
    )
}