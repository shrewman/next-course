import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="top-1/2 left-0 mx-auto flex flex-col justify-center items-center bg-slate-300 rounded-xl text-center h-32 w-2/3">
      <div className="text-xl font-bold mb-3">The requested page doesn't exist</div>
      <Link href="/" className="btn btn-sm btn-secondary">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
