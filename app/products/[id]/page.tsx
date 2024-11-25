"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import useProducts from "../useProducts";
import { Card } from "@/components/ui/card";
import { Poppins, Roboto, Edu_AU_VIC_WA_NT_Hand } from "next/font/google";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const edu = Edu_AU_VIC_WA_NT_Hand({
  subsets: ["latin"],
  weight: ["500", "600", "400"],
  variable: "--Edu_AU_VIC_WA_NT_Hand",
});

export default function SingleProductPage() {
  const searchParams = useParams();
  const { users } = useProducts();
  const [show, setShow] = useState(false);
  const singleUser = users?.find((el) => el._id === searchParams.id);

  // const {} =
  return (
    <>
      <div className=" relative">
        <div
          className=" cursor-pointer m-4 bg-slate-400 p-2 w-9 h-9 rounded-full flex items-center justify-center"
          onClick={() => {
            setShow((el) => !el);
          }}
        >
          <h1 className=" font-medium">{singleUser?.name[0]}</h1>
        </div>
        {show === true && (
          <div
            className={`${cn(
              edu.variable
            )} w-60 mx-1 z-50 absolute top-10 left-6`}
            style={{ fontFamily: "--Edu_AU_VIC_WA_NT_Hand" }}
          >
            <Card className=" px-3 py-1">
              <p>{singleUser?.name}</p>
              <p>{singleUser?.email}</p>
              <p>{singleUser?.role}</p>
              <p>{singleUser?.phone}</p>
            </Card>
          </div>
        )}
        <p>Moses MWANGI</p>
      </div>
      <Card className="flex mx-auto px-5 py-3 w-[40%]">
        <form className=" w-full">
          <Label>Name</Label>
          <Input />
          <Label>Email</Label>
          <Input />
          <Button className=" mt-4 w-full">Submit</Button>
        </form>
      </Card>
      <div className="h-svh relative w-full">
        <div className="bg-slate-300 rounded-sm absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  px-1 py-1 cursor-pointer overflow-hidden">
          <p>{singleUser?.name}</p>
          <p>{singleUser?.email}</p>
          <p>{singleUser?.role}</p>
          <p>{singleUser?.phone}</p>
        </div>
      </div>
    </>
  );
}
