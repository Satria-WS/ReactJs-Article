import React from "react";
import ReactDom from "react-dom";
import Test from "./test";
import symbolS from "../assets/images/S.png";

const Footer = () => {
  return (
    <>
      <div className="globalBox">
        <div className="boxFooter">
          <img className="Symbol_S" src={symbolS} alt="logo" />
          <div className="serbaSerbi Horizontal">SerbaSerbi</div>
          <div className="footerBootstrap">
            <Test />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
