import React, { useEffect, useState } from "react";
import "./index.scss";

const Pagination = () => {
  // Setting up our state
  const [currentPosition, setCurrentPosition] = useState(0);
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState([]);

  // Setting up useEffect
  useEffect(() => {
    const newsItem = [
      {
        title: "1. BBC",
        url: "http://bbc.com",
        description: "Latest News from BBC",
      },
      {
        title: "2. CNN",
        url: "https://cnn.com",
        description: "Latest News from CNN",
      },
      {
        title: "3. Google News",
        url: "https://news.google.com",
        description: "Latest News from Google",
      },
      {
        title: "4. TechCrunch",
        url: "https://techcrunch.com",
        description: "Latest News from TechCrunch",
      },
      {
        title: "5. The Verge",
        url: "https://theverge.com",
        description: "Latest News from the Verge",
      },
    ];
    const item = newsItem[currentPosition];
    setListItems(newsItem);
    // Set our state..
    setNews(item);
    setLoading(false);
  }, [currentPosition]);

  // Handle Next Button...
  const handleNext = (event) => {
    event.preventDefault();
    // Use our state....
    // setCurrentPosition(prev => prev + 1);

    const length = listItems.length;
    const count = length - 1;

    if (currentPosition < count - 1) {
      setCurrentPosition(currentPosition + 1);
    } else {
      setCurrentPosition(0);
    }
  };

  // Handle Previous...
  const handlePrevious = (event) => {
    event.preventDefault();
    // Use our state
    // setCurrentPosition(prev => prev - 1);
    if (currentPosition > 0) {
      setCurrentPosition((prev) => prev - 1);
    }
  };

  return (
    <>
      <section className="news">
        {loading ? (
          <div>Loading... </div>
        ) : (
          <div className="news-item">
            <h2>{news.title}</h2>
            <p>{news.description}</p>
            <a href="{news.url}">{news.url}</a>
          </div>
        )}
      </section>
      <div className="paginate"></div>
      <button className="prev" onClick={handlePrevious}>
        Prev
      </button>
      <button className="next" onClick={handleNext}>
        Next
      </button>
    </>
  );
};


export default Pagination;