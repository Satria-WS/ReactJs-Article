import React from "react";
import symbolS from "../../assets/images/S.png";
import moreThan from "../../assets/images/moreThan.png";
import right from "../../assets/images/right.png";
import sampleImage from "./sampleImage.png";

function Page2() {
  return (
    <>
      <div className="worldBoxPage2">
        <div className="HomeHeader">Home</div>
        <div className="ArticleHeader">Article</div>
        <img className="Symbol_S" src={symbolS} alt="logo" />
        <div className="serbaSerbi">Serba Serbi</div>
        <div className="WordArticleSmall">Article</div>
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
        <div className="textBigBoxArticle">
          <div className="textSmallBoxArticle">
            <p className="PageBox">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra orci sagittis eu volutpat odio
              facilisis mauris sit amet massa vitae tortor condimentum lacinia
              quis vel eros donec ac odio tempor orci dapibus ultrices in
              iaculis nunc sed augue lacus, viverra vitae congue eu, consequat
              ac felis donec et odio pellentesque diam volutpat commodo sed
              egestas egestas fringilla phasellus faucibus
            </p>
          </div>
          <div className="textSmallBoxArticle" style={{ top: "93px" }}>
            <p className="PageBox">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra orci sagittis eu volutpat odio
              facilisis mauris sit amet massa vitae tortor condimentum lacinia
              quis vel eros donec ac odio tempor orci dapibus ultrices in
              iaculis nunc sed augue lacus, viverra vitae congue eu, consequat
              ac felis donec et odio pellentesque diam volutpat commodo sed
              egestas egestas fringilla phasellus faucibus
            </p>
          </div>
          <img
            className="ImageArticlePageTwo"
            src={sampleImage}
            alt="sample Image"
            style={{ top: "141px" }}
          />
          <div className="textSmallBoxArticle" style={{ top: "189px" }}>
            <p className="PageBox">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra orci sagittis eu volutpat odio
              facilisis mauris sit amet massa vitae tortor condimentum lacinia
              quis vel eros donec ac odio tempor orci dapibus ultrices in
              iaculis nunc sed augue lacus, viverra vitae congue eu, consequat
              ac felis donec et odio pellentesque diam volutpat commodo sed
              egestas egestas fringilla phasellus faucibus
            </p>
          </div>
          <div className="textSmallBoxArticle" style={{ top: "237px" }}>
            <p className="PageBox">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra orci sagittis eu volutpat odio
              facilisis mauris sit amet massa vitae tortor condimentum lacinia
              quis vel eros donec ac odio tempor orci dapibus ultrices in
              iaculis nunc sed augue lacus, viverra vitae congue eu, consequat
              ac felis donec et odio pellentesque diam volutpat commodo sed
              egestas egestas fringilla phasellus faucibus
            </p>
          </div>
        </div>
        <div
          className="hashTagArticle"
          style={{ left: "120px", top: "2439px" }}
        >
          Tag
        </div>
        <div
          className="tagKeywordArticle"
          style={{ top: "2470px", left: "120px" }}
        >
          #ship #shipping #world #business
        </div>
        <div className="hashTagArticle" style={{ top: "2550px" }}>
          Keyword
        </div>
        <div className="tagKeywordArticle" style={{ top: "2582px" }}>
          ship safe priority world business
        </div>
        <div className="TextBigTitle" style={{ left: "120px", top: "2742px" }}>
          Similar
        </div>
      </div>
    </>
  );
}

export default Page2;
