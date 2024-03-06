"use client";

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
  products: any[];
  orderNo: number;
  paymentAmount: string;
  district: string;
  khoroo: string;
  apartment: string;
  addressDetail: string;
  phone: string;
  paymentMethod: { cash: boolean; card: boolean };
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
  handleCheckboxChange: (e: any) => void;
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
  handleCheckboxChange: function (): void {},
});

export const BasketProvider = ({ children }: PropsWithChildren) => {
  const token = localStorage.getItem("token");
  const router = useRouter();
  if (!token) {
    router.push("/login");
  }
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

  const [orderValues, setOrderValues] = useState<OrderValues>({
    products: [],
    orderNo: 0,
    paymentAmount: "",
    district: "",
    khoroo: "",
    apartment: "",
    addressDetail: "",
    phone: "",
    paymentMethod: { cash: false, card: false },
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
  const handleCheckboxChange = (e: any) => {
    setOrderValues((prevValues) => ({
      ...prevValues,
      paymentMethod: {
        ...prevValues.paymentMethod,
        [e.target.name]: e.target.checked,
      },
    }));
  };
  const createOrder = async () => {
    try {
      console.log(orderValues, "orderValuesorderValues");
      const { data } = await axios.post(
        "http://localhost:8080/orders",
        {
          orderNo: orderValues.orderNo,
          products: orderValues.products,
          payment: {
            paymentAmount: orderValues.paymentAmount,
            paymentMethod: orderValues.paymentMethod,
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
      value={{
        setBasket,
        basket,
        orderValues,
        deleteFoodFromBasket,
        createOrder,
        handleSelectChange,
        handleInputChange,
        handleCheckboxChange,
        setOrderValues,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
