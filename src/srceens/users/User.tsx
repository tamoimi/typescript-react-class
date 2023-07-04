import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

const User = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>
        USER with id {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to={"followers"}>See followers</Link>
      <Outlet context={{ nameOfMyUser: users[Number(userId) - 1].name }} />
    </>
  );
};
export default User;
