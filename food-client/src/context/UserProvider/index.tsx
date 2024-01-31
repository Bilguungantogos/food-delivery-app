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
    //
  };

  return (
    <UserContext.Provider value={{ user, login: () => {} }}>
      {children}
    </UserContext.Provider>
  );
};
