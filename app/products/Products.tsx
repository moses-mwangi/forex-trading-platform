"use client";

import { Button } from "@/components/ui/button";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useEffect, useState } from "react";
import useProducts from "./useProducts";

export default function Products() {
  const searchParams = useParams();
  const searchUrlParams = useSearchParams();
  const path = usePathname();
  const [para, setPara] = useState<string | null>("");
  const router = useRouter();

  const { name, users } = useProducts();

  useEffect(() => {
    const age = searchUrlParams.get("Age");
    setPara(age);
  }, [searchUrlParams]);

  return (
    <div>
      <p>ProductPagedddddddddddddd</p>
      <Button
        onClick={() => {
          const params = new URLSearchParams({
            Age: "23",
            work: "machine lerning",
          });

          router.push(`?${params.toString()}`);
        }}
      >
        Add Params
      </Button>
      <p>{para === "" || para === null ? "No Urls params Added" : para}</p>
      <Button
        className=""
        onClick={() => {
          console.log(users);
        }}
      >
        Show Params use Params WORK
      </Button>
      <div className="flex flex-row gap-3 mt-5 px-6">
        {users?.map((el) => (
          <div
            className="bg-slate-300 rounded-sm px-1 py-1 cursor-pointer overflow-hidden"
            key={el._id}
            onClick={() => {
              router.push(`${path}/${el._id}`);
            }}
          >
            <div className="hover:scale-150 transition-all duration-300">
              <p>{el.name}</p>
              <p>{el.email}</p>
              <p>{el.role}</p>
              <p>{el.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
