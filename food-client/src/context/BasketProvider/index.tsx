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
  createOrder: (orderInfo: string) => void;
  setBasket: React.Dispatch<React.SetStateAction<any[]>>;
}
export const BasketContext = createContext<IBasketContext>({
  basket: [],
  deleteFoodFromBasket: function (): void {},
  setBasket: function (): void {},
  createOrder: function (): void {},
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

  const orderNo = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  const [orderValues, setOrderValues] = useState({
    products: [],
    orderNo: orderNo(),
    paymentAmount: "",
    district: "",
    khoroo: "",
    apartment: "",
    addressDetail: "",
    phone: "",
    paymentMethod: { cash: false, card: false },
  });
  const createOrder = async (orderValues: any) => {
    try {
      console.log(orderValues, "orderValuesorderValues");
      const { data } = await axios.post(
        "http://localhost:8080/orders",
        {
          orderNo: orderValues.orderNo,
          products: orderValues.products,
          payment: {
            paymentAmount: orderValues.paymentAmount,
            // paymentMethod: orderValues.paymentMethod,
          },
          address: {
            khoroo: orderValues.khoroo,
            duureg: orderValues.district,
            buildingNo: orderValues.apartment,
            info: orderValues.addressDetail,
          },
        },
        config
      );
      console.log(data, "ordersuccessfully created");
    } catch (error) {
      console.log(error);
      console.log(orderValues);
    }
  };
  useEffect(() => {
    getAllBasketFoods();
  }, [refetch]);

  return (
    <BasketContext.Provider
      value={{ setBasket, basket, deleteFoodFromBasket, createOrder }}
    >
      {children}
    </BasketContext.Provider>
  );
};
