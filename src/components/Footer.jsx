import React from "react";
import ReactDom from "react-dom";
import Test from "./test";
import symbolS from "../assets/images/S.png";

const Footer = () => {
  return (
    <>
      <div className="globalBox">
        <div className="boxFooter">
          <img style={{top:"74px"}} className="Symbol_S" src={symbolS} alt="logo" />
          <div style={{top:"88px"}} className="serbaSerbi Horizontal">SerbaSerbi</div>
          <div style={{top:"75px"}} className="menuBantuan">Menu</div>
          <div className="menuBantuan">Bantuan</div>
          <div className="homePusatPrivacy">Home</div>
          <div className="homePusatPrivacy">Pusat Bantuan</div>
          <div className="homePusatPrivacy">Privacy Policy</div>
          <div className="footerBootstrap">
            <Test />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
