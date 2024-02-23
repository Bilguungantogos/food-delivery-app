"use client";

import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import React, { createContext, useState, PropsWithChildren } from "react";

interface IUser {
  _id?: string;
  name: string;
  email: string;
  address: string;
  password?: string;
  rePassword?: string;
}
//  "_id": "65c095d33c41038ba9f3d33e",
//           "name": "Tsuivan",
//           "price": 100,
//           "discountPrice": 80,
//           "isSale": false,
//           "description": "Tostoi tsuivan",
//           "image": "https://images.unsplash.com/photo-1580554530778-ca36943938b2?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           "category": {
//               "_id": "65bcc8887053c21ee0cb2aad",
//               "name": "Үндсэн хоол"
//           },

interface IUserContext {
  user: IUser;
  login: (name: string, password: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const UserContext = createContext<IUserContext>({
  user: { name: "", email: "", address: "" },
  login: function (): void {},
  loading: false,
  setLoading: function (): void {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>({
    name: "testuser",
    email: "",
    address: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const data = await axios.post("http://localhost:8080/auth/login", {
        userEmail: email,
        userPassword: password,
      });
      setLoading(false);
      router.push("/");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  if (!user) {
    redirect("/login");
  }

  // const cardInfo = async () => {
  //   try {
  //     const data = await axios.get("http://localhost:8080/foods", {});
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <UserContext.Provider value={{ user, login, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
