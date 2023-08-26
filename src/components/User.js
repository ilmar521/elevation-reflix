import { Link } from "react-router-dom";

export default function User({ usersData, setUsersData, userID, colorClass, userData }) {
  function handleClick(){
    setUsersData({ ...usersData, activeUserId: userID })
  }
  return (
    <div className="user-container">
      <Link to={"/catalog"}>
        <button
          className={`_btn user-btn ${colorClass}`}
          onClick={handleClick}
        >
          {userData.name}
        </button>
      </Link>
    </div>
  );
}
