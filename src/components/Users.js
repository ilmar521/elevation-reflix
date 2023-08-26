import User from "./User";

export default function Users({ usersData, setUsersData }) {
  return (
    <div className="users-container">
      {usersData.users.map( user => (
          <User
            userID={user.id}
            usersData={usersData}
            userData={user}
            colorClass={user.color}
            setUsersData={setUsersData}
          />
        ))}
    </div>
  );
}
