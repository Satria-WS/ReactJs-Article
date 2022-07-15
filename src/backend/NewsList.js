import NewsItem from "./Newsitem";
import React, { useEffect, useState } from "react";
import Axios from "axios";

const NewsList = () => {const [articles, setArticles] = useState([]);
  

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?apiKey=af178ec04288441788f0780ea7b0f93e&q=tesla&from=2022-07-01&sortBy=popularity&language=id&pageSize=3&page=2"
      );
      //console.log(res);
    //   console.log(res.data.articles);
      //console.log(res.data.articles[0].author); //Misrohatun Hasanah

      setArticles(res.data.articles);
    };
    getArticles();
  }, []);
  return (
    <>
      {/* article original */}
      {/*       <div>
        {articles.map(
          ({ title, description, url, urlToImage, publishedAt }) => (
            <NewsItem
              title={title}
              description={description}
              url={url}
              urlToImage={urlToImage}
              publishedAt={publishedAt}
            />
          )
        )}
      </div> */}

      {/* article page 2 */}
      <div>
        {articles.map(
          ({ title, url, urlToImage, publishedAt, content, description }) => (
            <NewsItem
              title={title}
              url={url}
              urlToImage={urlToImage}
              publishedAt={publishedAt}
              content={content}
              description={description}
            />
          )
        )}
      </div>
    </>
  );
};

export default NewsList;
