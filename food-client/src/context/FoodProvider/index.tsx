"use client";

import myAxios from "@/utils/axios";
import axios from "axios";
import { useRouter } from "next/router";
import React, {
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";

interface IFood {
  [key: string]: any;
}

interface IFoodContext {
  foods: IFood;
}

export const FoodContext = createContext<IFoodContext>({
  foods: {},
});

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foods, setFoods] = useState([]);

  const getFoodinfo = async () => {
    try {
      const { data } = await myAxios.get("/foods");
      setFoods(data.allFood);
      console.log("aaaaa", data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFoodinfo();
  }, []);

  return (
    <FoodContext.Provider value={{ foods }}>{children}</FoodContext.Provider>
  );
};
