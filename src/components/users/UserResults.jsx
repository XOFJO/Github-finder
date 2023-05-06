import React from "react";
import { useContext, useReducer } from "react";
import Spinner from "../layouts/Spinner";
import GithubContext from "../../context/GithubContext";
import UserItem from "./UserItem";

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GithubContext);

  if (loading === false) {
    return (
      <div className="grid grid-col-1 gap-8 xl:grid-col-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((item) => {
          return <UserItem key={item.id} user={item} />;
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
