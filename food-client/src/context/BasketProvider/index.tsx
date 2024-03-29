"use client";

import myAxios from "@/utils/axios";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";

interface IBasket {
  [key: string]: any;
}
interface OrderValues {
  duureg: string;
  khoroo: string;
  buildingNo: string;
  info: string;
  phone: string;
}
interface IBasketContext {
  basket: IBasket;
  orderValues: IBasket;
  deleteFoodFromBasket: (foodId: string) => void;
  createOrder: () => void;
  setBasket: React.Dispatch<React.SetStateAction<any[]>>;
  setOrderValues: React.Dispatch<React.SetStateAction<OrderValues>>;
  handleSelectChange: (name: string, value: string) => void;
  handleInputChange: (e: any) => void;
  // handleCheckboxChange: (e: any) => void;
}
export const BasketContext = createContext<IBasketContext>({
  basket: [],
  orderValues: [],
  deleteFoodFromBasket: function (): void {},
  setBasket: function (): void {},
  setOrderValues: function (): void {},
  createOrder: function (): void {},
  handleSelectChange: function (): void {},
  handleInputChange: function (): void {},
  // handleCheckboxChange: function (): void {},
});

export const BasketProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const [refetch, setRefetch] = useState<boolean>(false);
  const [basket, setBasket] = useState<any[]>([]);

  const addFoodToBasket = async (foodItem: any) => {
    try {
      const token = localStorage?.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await myAxios.post("/basket", foodItem, config);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFoodFromBasket = async (foodId: string) => {
    try {
      const token = localStorage?.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const deleteFood = await myAxios.delete(`/basket/${foodId}`, config);
      setRefetch(!refetch);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBasketFoods = async () => {
    try {
      const token = localStorage?.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await myAxios.get("/basket", config);
      setBasket(data.basket);
      console.log(data, "getAllBasketFoods");
    } catch (error) {
      console.log(error);
    }
  };
  //  address: {
  //           khoroo: { type: String },
  //           duureg: { type: String },
  //           buildingNo: { type: String },
  //           info: String,
  //         },
  const [orderValues, setOrderValues] = useState<OrderValues>({
    duureg: "",
    khoroo: "",
    buildingNo: "",
    info: "",
    phone: "",
    // paymentMethod: { cash: false, card: false },
  });

  const handleSelectChange = (name: string, value: string) => {
    setOrderValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setOrderValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(orderValues);
  };
  // const handleCheckboxChange = (e: any) => {
  //   setOrderValues((prevValues) => ({
  //     ...prevValues,
  //     paymentMethod: {
  //       ...prevValues.paymentMethod,
  //       [e.target.name]: e.target.checked,
  //     },
  //   }));
  // };
  const createOrder = async () => {
    try {
      const token = localStorage?.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log(orderValues, "orderValuesorderValues");
      const { data } = await myAxios.post("/orders", orderValues, config);
      console.log(data, "ordersuccessfully created");
      setBasket([]);
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
      value={{
        setBasket,
        basket,
        orderValues,
        deleteFoodFromBasket,
        createOrder,
        handleSelectChange,
        handleInputChange,
        setOrderValues,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
