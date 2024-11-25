"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className="flex flex-col gap-4 min-h-svh items-center justify-center">
      <h1 className=" flex justify-center">E-Cormerce Page</h1>
      <div>
        <p className=" flex text-center text-[17px] font-semibold text-blue-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          quisquam, assumenda sapiente cupiditate ab eum, inventore architecto
          eligendi perspiciatis quo aspernatur amet nulla voluptas et nemo
          recusandae vel rem minima?
        </p>
      </div>
      <div>
        <h1>Moses Mwangi</h1>
      </div>
      <div className=" hover:overflow-hidden hover:cursor-pointer px-2 py-1 rounded-sm bg-yellow-500">
        <h1
          className="transition-all hover:zoom-in-105 overflow-hidden duration-300 w-full h-full"
          onClick={() => {
            console.log("Moses");
          }}
        >
          Computer Science
        </h1>
      </div>
      <Button
        className=" bg-blue-700 hover:bg-red-800 transition-colors duration-200"
        onClick={() => {
          router.push("/products");
          console.log(path);
          console.log("Moses Mwangi");
        }}
      >
        Click Me
      </Button>
    </div>
  );
}
