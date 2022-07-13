import NewsItem from "./Newsitem";
import React, { useEffect, useState } from "react";
import Axios from "axios";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-06-13&sortBy=publishedAt&apiKey=af178ec04288441788f0780ea7b0f93e"
      );
      console.log(res);
      //console.log(res.data.articles);
      setArticles(res.data.articles);
    };
    getArticles();
  },[]);
  return (
    <div>
      {articles.map(({ title, description, url, urlToImage }) => (
        <NewsItem
          title={title}
          description={description}
          url={url}
          urlToImage={urlToImage}
        />
      ))}

      {/* <NewsItem/> */}
    </div>
  );
};

export default NewsList;
