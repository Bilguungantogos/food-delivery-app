"use client";

import axios from "axios";
import { useRouter } from "next/router";
import React, {
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";

interface IFood {
  name: string;
  price: number;
  description: string;
  image: string;
  discountPrice: number;
  category: {
    name: string;
    _id: string;
  };
}
//  "_id": "65c095d33c41038ba9f3d33e",
//           "name": "Tsuivan",
//           "price": 100,
//           "discountPrice": 80,
//           "isSale": false,
//           "description": "Tostoi tsuivan",
//           "image": "https://images.unsplash.com/photo-1580554530778-ca36943938b2?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           "category": {
//               "_id": "65bcc8887053c21ee0cb2aad",
//               "name": "Үндсэн хоол"
//           },

interface IFoodContext {
  food: IFood;
}

export const FoodContext = createContext<IFoodContext>({
  food: {
    name: "",
    price: 0,
    description: "",
    image: "",
    discountPrice: 0,
    category: {
      name: "",
      _id: "",
    },
  },
});

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foods, setFoods] = useState<IFood[]>([]);
  useEffect(() => {
    getFoodinfo();
  }, []);

  const getFoodinfo = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/foods");
      setFoods(data.allFood);
      console.log(foods);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FoodContext.Provider value={{ foods }}>{children}</FoodContext.Provider>
  );
};
