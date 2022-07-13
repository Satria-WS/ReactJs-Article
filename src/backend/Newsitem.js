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
      {/* article original */}
      {/*       <div>
        <img src={urlToImage} alt="" />
        <h4>
          <a href={url}>{title}</a>
        </h4>
        <div>{publishedAt}</div>
        <div>#ship #shipping #world #business</div>
        <p>{description}</p>
        <p>read more</p>
      </div> */}

      {/* article page 2 */}
      <div className="Backend-box_1">
        <div className=" ">
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
            {/* <p>{content}</p> */}
            <p className="readMoreContent ">Read More</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;

// img (urlToImage)
// title (title)
// date time (publishedAt) 12 Desember 2021
// hashtag
// description (description)
// readmore
