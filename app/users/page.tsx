import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

type Props = {
  searchParams: { sortOrder: keyof User }
}

const UsersPage = async ({ searchParams }: Props) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">UsersPage</h1>
      <Link href="/users/new" className="btn btn-sm">New user</Link>
      <UserTable sortOrder={searchParams.sortOrder} />
    </>
  );
};

export default UsersPage;
