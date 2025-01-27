import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

type Props = {
  searchParams: { sortOrder: keyof User };
};

const UsersPage = async ({ searchParams }: Props) => {
  return (
    <>
      <h1 className="text-2xl font-bold">UsersPage</h1>
      <div className="p-2 mb-2 bg-slate-300 rounded">
        <Link href="/users/new" className="btn btn-sm btn-primary">
          New user
        </Link>
      </div>
      <Suspense fallback={<LoadingTable />}>
        <UserTable sortOrder={searchParams.sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;

const LoadingTable = async () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">UsersPage</h1>
      <table className="table table-xs">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((n) => (
            <tr key={n}>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
