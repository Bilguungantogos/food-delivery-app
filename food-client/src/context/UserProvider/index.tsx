"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";
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

  useEffect(() => {
    const fetchUserFromToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const { data } = await axios.get(`http://localhost:8080/users`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userData = data.findUser;
          setUser({
            name: userData.name,
            email: userData.email,
            address: userData.address,
            avatarUrl: userData.avatarUrl,
          });
          console.log(data, "lasdjkdsajlksdajksdajlk");
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchUserFromToken();
  }, []);

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
