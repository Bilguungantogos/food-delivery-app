"use client";

import axios from "axios";
import { useRouter } from "next/router";
import React, {
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";

interface ICategory {
  [key: string]: any;
}

interface ICategoryContext {
  category: ICategory;
}

export const CategoryContext = createContext<ICategoryContext>({
  category: [],
});

export const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/category");
      setCategory(data.categories);
      console.log("category =========", data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategory;
  }, []);

  return (
    <CategoryContext.Provider value={{ category }}>
      {children}
    </CategoryContext.Provider>
  );
};
