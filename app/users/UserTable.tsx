import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

type Props = {
  sortOrder: keyof User;
};

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(sortOrder);

  return (
    <>
      <h2>{sortOrder}</h2>
      <table className="table table-xs">
        <thead>
          <tr>
            <th>
              <Link href="?sortOrder=id">ID</Link>
            </th>
            <th>
              <Link href="?sortOrder=username">Username</Link>
            </th>
            <th>
              <Link href="?sortOrder=email">Email</Link>
            </th>
            <th>
              <Link href="?sortOrder=phone">Phone</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id} className="hover">
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
