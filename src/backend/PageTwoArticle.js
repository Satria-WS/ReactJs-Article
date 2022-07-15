import React, { useEffect, useState } from "react";
import Axios from "axios";

const PageTwoArticle = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?apiKey=af178ec04288441788f0780ea7b0f93e&q=technology&from=2022-07-01&sortBy=relevancy&language=en&pageSize=3&page=2"
      );
      console.log("os");
    };
    getArticles();
  });

  return (
    <>
      <div
        className="BoxColoumnPageTwo"
        style={{ top: "1269px", left: "120px" }}
      >
        box1{" "}
      </div>
      <div
        className="BoxColoumnPageTwo"
        style={{ top: "478px", left: "769px" }}
      >
        box2
      </div>
    </>
  );
};

export default PageTwoArticle;
