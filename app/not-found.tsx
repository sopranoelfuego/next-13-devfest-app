"use client";
import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="w-[30rem] flex flex-col items-end">
      <button className="p-2 m-2 bg-sage-700">
        <Link href="/">Home</Link>
      </button>
      Opps! hello fox
    </div>
  );
}

export default NotFound;
