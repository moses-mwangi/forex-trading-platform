"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();
  return (
    <div>
      not-found
      <p>This Page Does Not EXIXT</p>
      <button
        className=" bg-red-500 px-2 py-1 rounded-sm cursor-pointer w-56 flex justify-center"
        onClick={() => {
          router.push("/");
        }}
      >
        Return Back
      </button>
    </div>
  );
}
