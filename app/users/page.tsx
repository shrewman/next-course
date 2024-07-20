import React from "react";
import UserTable from "./UserTable";

type Props = {
  searchParams: { sortOrder: keyof User }
}

const UsersPage = async ({ searchParams }: Props) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">UsersPage</h1>
      <UserTable sortOrder={searchParams.sortOrder} />
    </>
  );
};

export default UsersPage;
