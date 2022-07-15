import React from "react";
import symbolS from "../../assets/images/S.png";
import moreThan from "../../assets/images/moreThan.png"
import right from "../../assets/images/right.png"
import sampleImage from "./sampleImage.png"

function Page2() {
  return (
    <>
      <div className="worldBoxPage2">
        <div className="HomeHeader">Home</div>
        <div className="ArticleHeader">Article</div>
        <img className="Symbol_S" src={symbolS} alt="logo" />
        <div className="serbaSerbi">Serba Serbi</div>
        <div className="TextArticleSmall">Article</div>
        <div>
          <img className="moreThan" src={moreThan} alt="more than" />
        </div>
        <div className="TextSmall">
          Safe and reliable shipment of your products is our top priority
        </div>
        <div className="TextBigTitle">
          Safe and reliable shipment of your products is our top priority
        </div>
        <div className="dateTimeArticle">
          Dipost Oleh Ferdi - 12 Desember 2021 12:54 WIB{" "}
          <img className="rightSymbol" src={right} />
          <img
            className="ImageArticlePageTwo"
            src={sampleImage}
            alt="sample Image"
          />
        </div>
        <div className="textBoxArticle">sdf</div>
        <div className="textBoxArticle">sdf</div>
      </div>
    </>
  );
}

export default Page2;
