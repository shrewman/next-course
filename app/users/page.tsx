import React from "react";

interface User {
  id: number;
  username: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <h1 className="text-2xl font-bold">UsersPage</h1>
      <ul>
        {users.map((user) => (
          <p key={user.id}>{user.username}</p>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
