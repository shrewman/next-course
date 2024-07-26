import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const UserDetailPage = async ({ params }: Props) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
  );
  const user = await res.json();
  if (!user.id) notFound();

  return <div>UserDetailPage {user.id}</div>;
};

export default UserDetailPage;
