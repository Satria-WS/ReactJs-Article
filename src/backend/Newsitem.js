import React from "react";

const NewsItem = ({
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}) => {
  return (
    <>

      <div className="">
        <div className=" Backend-box_1">
          <div className="">
            <img className="img_Backend" src={urlToImage} />
            <div>
              <a className="titleContent" href={url}>
                {title}
              </a>
            </div>
            <div className="dateContent">{publishedAt}</div>
            <div className="hashtagContent">
              #ship #shipping #world #business
            </div>
            <div className="descriptionContent ">{description}</div>
            <p className="readMoreContent ">Read More</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;

