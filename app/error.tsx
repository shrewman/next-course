"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error: ", error);
  return (
    <div className="top-1/2 left-0 mx-auto flex flex-col justify-center items-center bg-slate-300 rounded-xl text-center h-32 w-2/3">
      <h1>Error</h1>
      <div className="text-xl font-bold mb-3">Unexpected error has occured</div>
      <button className="btn btn-sm btn-secondary" onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
};

export default ErrorPage;
