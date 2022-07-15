import React, { useEffect, useState } from "react";
import Axios from "axios";

const PageTwoArticle = () => {
  const [articles, setArticles] = useState({});

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?apiKey=af178ec04288441788f0780ea7b0f93e&q=technology&from=2022-07-01&sortBy=relevancy&language=en&pageSize=1&page=2"
      );
      //   console.log("os");
      //   console.log(res.data.articles);
      // console.log(res.data.articles[0].author)

      // setArticles(res.data.articles);
      // setArticles(res.data.articles[0].author);

      //   const authorName = res.data.articles[0].author;

      const articles = res.data.articles[0];

      setArticles({
        title: articles.title,
        url: articles.url,
        urlToImage: articles.urlToImage,
        publishedAt: articles.publishedAt,
        content: articles.content,
        description: articles.description,
      });
    };
    getArticles();
  });

  return (
    <>
      <div
        className="BoxColoumnPageTwo"
        style={{ top: "1269px", left: "120px" }}
      >
        {/* box1 */}
        {/* {articles.description} */}
        <img className="img_Backend" src={articles.urlToImage} />
        <div>
          <a className="titleContent" href={articles.url}>
            {articles.title}
          </a>
        </div>
        <div className="dateContent">{publishedAt}</div>
        <div className="hashtagContent">#ship #shipping #world #business</div>

        <div className="descriptionContent ">{description}</div>

        <p className="readMoreContent ">Read More</p>
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
