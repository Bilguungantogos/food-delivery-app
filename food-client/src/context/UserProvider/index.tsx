"use client";

import axios from "axios";
import React, { createContext, useState, PropsWithChildren } from "react";
import { toast } from "react-toastify";

interface IUser {
  name: string;
  email: string;
  address: string;
  password?: string;
  rePassword?: string;
}
interface IFood {
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  image?: string;
  isSale: boolean;
  category: {
    _id: string;
    name: string;
  };
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
}

export const UserContext = createContext<IUserContext>({
  user: { name: "", email: "", address: "" },
  login: function (): void {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>({
    name: "testuser",
    email: "",
    address: "",
  });
  // const [allfoodInfo, setAllFoodInfo] = useState<IFood>({
  //   name: "",
  //   description: "",
  //   price: 0,
  //   discountPrice: 0,
  //   image: "",
  //   isSale: false,
  //   category: {
  //     _id: "",
  //     name: "",
  //   },
  // });

  const login = async (email: string, password: string) => {
    try {
      const data = await axios.post("http://localhost:8080/auth/login", {
        email: user.email,
        password: user.password,
      });
    } catch (error) {
      toast.error("Email илгэээхэд алдаа гарлаа.");
      console.log(error);
    }
  };

  // const cardInfo = async () => {
  //   try {
  //     const data = await axios.get("http://localhost:8080/foods", {});
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <UserContext.Provider value={{ user, login: () => {} }}>
      {children}
    </UserContext.Provider>
  );
};
