import React, { useEffect, useState } from "react"

function UseCustomHook() {
    
// Create Custom Hook
const useGetData = (type) => {
    // Set up our state
  
    const [data, setData] = useState([]);
  
    // Use Effect Hook
    useEffect(() => {
      // Create Lists
      const cars = [
        {
          id: 1,
          name: "BMW",
          year: 2023,
        },
        {
          id: 2,
          name: "Mercendenz",
          year: 1999,
        },
      ];
  
      // Books
  
      const books = [
        {
          id: 1,
          book: "The Muslim Home Recommendations",
        }, {
          id: 2,
          book: "7 Habits of Highly Effective People"
        }
      ];
  
      // Do magic
      if (type === "cars") {
        setData(cars);
      } else if (type === "books") {
        setData(books);
      } else {
        setData([]);
      }
    }, [type]);
  
    return [data];
  };
  
  function ShowApp() {
    const [data] = useGetData("books")
    console.log(data)
  
    return (
      <div className="main-page"></div>
    )
  }
}

export default UseCustomHook;