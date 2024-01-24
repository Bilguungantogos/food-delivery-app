import React, { createContext, useState, PropsWithChildren } from "react";

import { useRouter } from "next/router";

interface userContextType {}
export const UserContext = createContext<userContextType | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
  // const router = useRouter();
  // const [user, setUser] = useState();
  // const [formUserData, setLoginUserData] = useState({
  //   email: "naraa@gmail.com",
  //   password: "",
  //   rePassword: "",
  //   name: "",
  // });

  // const changeFormUserData = (key: string, value: string) => {
  //   setLoginUserData({ ...formUserData, [key]: value });
  // };

  // const signup = async () => {
  //   if (
  //     !formUserData.email ||
  //     !formUserData.password ||
  //     !formUserData.rePassword ||
  //     !formUserData.name
  //   ) {
  //     alert("Хоосон талбаруууд байж болохгүй");
  //     return;
  //   }
  //   if (formUserData.password !== formUserData.rePassword) {
  //     alert("Нууц үг хоорондоо тохирохгүй байна.");
  //     return;
  //   }
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return <UserContext.Provider>{children}</UserContext.Provider>;
};
