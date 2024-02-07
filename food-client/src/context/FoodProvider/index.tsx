"use client";

import axios from "axios";
import React, { createContext, useState, PropsWithChildren } from "react";
import { toast } from "react-toastify";

interface IFood {
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  image?: string;
  isSale: boolean;
  category: {
    _id: string;
    name: string;
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
  allFood: IFood;
  login: (name: string, password: string) => void;
}

export const FoodContext = createContext<IFoodContext>({});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [allFood, setAllFood] = useState<IFood>();
  // const [allfoodInfo, setAllFoodInfo] = useState<IFood>({
  //   name: "",
  //   description: "",
  //   price: 0,
  //   discountPrice: 0,
  //   image: "",
  //   isSale: false,
  //   category: {
  //     _id: "",
  //     name: "",
  //   },
  // });

  const allFoods = async () => {
    try {
      const data = await axios.get("http://localhost:8080/foods", {});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FoodContext.Provider value={{ allFood, allFoods: () => {} }}>
      {children}
    </FoodContext.Provider>
  );
};
