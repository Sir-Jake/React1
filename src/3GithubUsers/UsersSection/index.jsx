import users from "../users.json";
import SingleUserV2 from "./SingleUserV2";

//users is an array
//loop -> for loops
//map method

function UsersSection({ page }) {
  if (page !== "users") {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {users.map((user) => (
        <SingleUserV2
          key={user.id}
          login={user.login}
          avatar_url={user.avatar_url}
          url={user.html_url}
        />
      ))}
    </div>
  );
}

export default UsersSection;
