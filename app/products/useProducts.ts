"use client";
import { useEffect, useState } from "react";
import User from "../types";
import axios from "axios";

function useProducts() {
  const [name, setName] = useState("Moses Mwangi");
  const [users, setUsers] = useState<User[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function getUsers() {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://real-estate-api-azure.vercel.app/api/users"
        );
        setLoading(false);

        setUsers(res.data.users);
      } catch (err) {
        console.error(err);
        console.log(err);
        setLoading(false);
        setError(err);
      }
    }

    getUsers();
  }, []);

  // useEffect(() => {
  //   async function getUsers() {
  //     try {
  //       setLoading(true);
  //       const res = await axios.get(
  //         "https://real-estate-api-azure.vercel.app/api/users"
  //       );
  //       setLoading(false);

  //       setUsers(res.data.users);
  //     } catch (err) {
  //       console.error(err);
  //       console.log(err);
  //       setLoading(false);
  //       setError(err);
  //     }
  //   }

  //   getUsers();
  // }, []);

  return { name, users, loading, error };
}

export default useProducts;
