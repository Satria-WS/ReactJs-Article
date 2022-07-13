import React from "react";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div>
      <img src={urlToImage} alt="" />
      <h4>
        <a href={url}>{title}</a>
      </h4>
      <p>{description}</p>
      {/* <h2>test</h2> */}
    </div>
  );
};

export default NewsItem;
