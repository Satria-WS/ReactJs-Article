import React from "react";

const NewsItem = ({ title, description, url, urlToImage, publishedAt , content }) => {
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
      <div>
        <h1>
            <a href={url}>{title}</a>
        </h1>
        <h1>{publishedAt}</h1>
        <img src={urlToImage}/>
        <p>{description}</p>
        <p>{content}</p>

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
