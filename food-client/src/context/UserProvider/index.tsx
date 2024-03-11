"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useState, PropsWithChildren } from "react";
import { toast } from "react-toastify";
import { boolean } from "yup";

interface IUser {
  name: string;
  email: string;
  address: string;
  password?: string;
  rePassword?: string;
  avatarUrl?: string;
}
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
    name: "",
    email: "",
    address: "",
    password: "",
    avatarUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:8080/auth/login", {
        userEmail: email,
        userPassword: password,
      });
      const token = data.token;
      localStorage.setItem("token", token);
      setUser({
        ...user,
        name: data.user.name,
        email: data.user.email,
        avatarUrl: data.user.avatarUrl,
      });
      setLoading(false);
      router.push("/");
      console.log(data);
    } catch (error) {
      toast.error("Email илгэээхэд алдаа гарлаа.");
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
