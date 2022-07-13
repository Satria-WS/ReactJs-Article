import { Axios } from "axios";
import React, { useEffect, useState } from "react";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-06-13&sortBy=publishedAt&apiKey=af178ec04288441788f0780ea7b0f93e"
      );
      console.log(res);
    };
    getArticles();
  });
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default NewsList;
