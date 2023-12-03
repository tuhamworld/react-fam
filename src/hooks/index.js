import { useEffect, useState } from "react";
import { apiRoutes } from "../services/routes";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(apiRoutes.products.getAll)
      .then((res) => {
        const data = res.json();
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return products;
};
