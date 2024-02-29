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

interface IBasketContext {
  basket: IBasket;
  deleteFoodFromBasket: (foodId: string) => void;
  setBasket: React.Dispatch<React.SetStateAction<any[]>>;
}
export const BasketContext = createContext<IBasketContext>({
  basket: [],
  deleteFoodFromBasket: function (): void {},
  setBasket: function (): void {},
});

export const BasketProvider = ({ children }: PropsWithChildren) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [refetch, setRefetch] = useState<boolean>(false);
  const [basket, setBasket] = useState<any[]>([]);

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
      setRefetch(!refetch);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBasketFoods = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/basket", config);
      setBasket(data.basket);
      console.log(data, "getAllBasketFoods");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBasketFoods();
  }, [refetch]);

  return (
    <BasketContext.Provider value={{ setBasket, basket, deleteFoodFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
