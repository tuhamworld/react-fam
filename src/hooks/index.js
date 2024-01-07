import { useEffect, useState } from "react";
// import { apiRoutes } from "../services/routes";

// export const useGetProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch(apiRoutes.products.getAll)
//       .then((res) => {
//         const data = res.json();
//         setProducts(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return products;
// };

// ......................................................................................
//  It is important to include "use" when referencing to hooks
export const useGetAllAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleFetchAlbums = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const allAlbums = await response.json();
        //  console.log(allAlbums)
        setAlbums(allAlbums);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    handleFetchAlbums();
  }, []);

  return [ albums, isLoading ];
};
