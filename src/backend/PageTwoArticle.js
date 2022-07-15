import React, { useEffect, useState } from "react";
import Axios from "axios";
import Footer from "../components/page1/Footer";
import Test from "../components/page1/test";
import symbolS from "../assets/images/S.png"

const PageTwoArticle = () => {
  const [articles, setArticles] = useState({});

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?apiKey=af178ec04288441788f0780ea7b0f93e&q=technology&from=2022-07-01&sortBy=relevancy&language=en&pageSize=1&page=2"
      );
     
      const articles = res.data.articles[0];

      setArticles(
        {
          title: articles.title,
          url: articles.url,
          urlToImage: articles.urlToImage,
          publishedAt: articles.publishedAt,
          content: articles.content,
          description: articles.description,
        },
        []
      );
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
        <div className="dateContent">{articles.publishedAt}</div>
        <div className="hashtagContent">#ship #shipping #world #business</div>
        <div className="descriptionContent ">{articles.description}</div>
        <p className="readMoreContent " style={{ top: "90px" }}>
          Read More
        </p>
      </div>
      <div
        className="BoxColoumnPageTwo"
        style={{ top: "719px", left: "769px" }}
      >
        {/* box2 */}
        <img className="img_Backend" src={articles.urlToImage} />
        <div>
          <a className="titleContent" href={articles.url}>
            {articles.title}
          </a>
        </div>
        <div className="dateContent">{articles.publishedAt}</div>
        <div className="hashtagContent">#ship #shipping #world #business</div>
        <div className="descriptionContent ">{articles.description}</div>
        <p className="readMoreContent " style={{ top: "90px" }}>
          Read More
        </p>
      </div>

      <div>
        <div className="boxFooter pageTwoFooter ">
          <img
            style={{ top: "74px" }}
            className="Symbol_S"
            src={symbolS}
            alt="logo"
          />
          <div style={{ top: "88px" }} className="serbaSerbi Horizontal">
            SerbaSerbi
          </div>
          <div style={{ top: "75px", left: "429px" }} className="menuBantuan">
            Menu
          </div>
          <div style={{ top: "75px", left: "563px" }} className="menuBantuan">
            Bantuan
          </div>
          <div
            style={{ top: "121px", left: "429px" }}
            className="homePusatPrivacy"
          >
            Home
          </div>
          <div
            style={{ top: "121px", left: "553px" }}
            className="homePusatPrivacy"
          >
            Pusat Bantuan
          </div>
          <div
            style={{ top: "154px", left: "553px" }}
            className="homePusatPrivacy"
          >
            Privacy Policy
          </div>
          <div className="footerBootstrap"></div>
        </div>
      </div>

      <div className="testJson">
        <Test />
      </div>
    </>
  );
};

export default PageTwoArticle;
