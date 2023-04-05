import { useParams } from "react-router-dom";
import { users } from "../../db";

const User = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>
        USER with id {userId} is named: {users[Number(userId) - 1].name}
      </h1>
    </>
  );
};
export default User;