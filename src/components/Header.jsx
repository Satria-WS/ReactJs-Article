import React from "react";
import ReactDOM from "react-dom";
import symbolS from "../assets/images/S.png";
import magnifier from "../assets/images/magnificier.png";
import vector from "../assets/images/Vector.png";

function Header() {
  return (
    <>
      <div className="globalBox">
        <div className="HomeHeader">Home</div>
        <div className="ArticleHeader">Article</div>
        <img className="Symbol_S" src={symbolS} alt="logo" />
        <div className="serbaSerbi">Serba Serbi</div>
        <div className="ArticleTitle">Article</div>
        <div className="searchBar">
          <div className="">
            <img
              className="symbolMagnifier "
              src={magnifier}
              alt="logo-search"
            />
          </div>
          <img
            className="symbolMagnifier batangSakti"
            src={vector}
            alt="batang-sakti"
          />
          <div className="cariArticle">cari</div>
        </div>
      </div>
    </>
  );
}

export default Header;
