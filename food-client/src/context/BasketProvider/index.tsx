"use client";

import axios from "axios";
import { useRouter } from "next/router";
import React, {
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";

interface IBasket {
  [key: string]: any;
}

export const BasketContext = createContext({} as object);

export const BasketProvider = ({ children }: PropsWithChildren) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [refetch, setRefetch] = useState<boolean>(false);
  const [basket, setBasket] = useState<{} | null>(null);
  const addFoodToBasket = async (foodItem: any) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/basket",
        foodItem,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFoodFromBasket = async (foodId: string) => {
    try {
      const deleteFood = await axios.delete(
        `http://localhost:8080/basket/${foodId}`,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBasketFoods = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/basket", config);
      setBasket({ ...basket });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BasketContext.Provider value={{ setBasket, basket }}>
      {children}
    </BasketContext.Provider>
  );
};
