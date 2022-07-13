import React from "react";
import ReactDom from "react-dom";
import newsHot from "../assets/images/newsHot.png";

const Middle = () => {
  return (
    <>
      {/* backend */}

      {/* kolom-1 */}
      <div className="globalBox">
        <div className="MiddleColoumn_1">
          {/* content */}

          <div className="boxColoumn_1">
            <img src={newsHot} />
            <h4 className="titleContent">
              Safe and reliable shipment of your product is out top priority
            </h4>
            <div className="dateContent">12 Desember 2021</div>
            <div className="hashtagContent">
              #ship #shipping #world #business
            </div>
            <div className="descriptionContent ">
              a book or other written or printed work, regarded in terms of its
              content rather. a book or other writt ...
            </div>
            <div className="readMoreContent ">Read More</div>
          </div>

          <div className="boxColoumn_1">
            <img src={newsHot} />
            <h4 className="titleContent">
              Safe and reliable shipment of your product is out top priority
            </h4>
            <div className="dateContent">12 Desember 2021</div>
            <div className="hashtagContent">
              #ship #shipping #world #business
            </div>
            <div className="descriptionContent ">
              a book or other written or printed work, regarded in terms of its
              content rather. a book or other writt ...
            </div>
            <div className="readMoreContent ">Read More</div>
          </div>

          <div className="boxColoumn_1">
            <img src={newsHot} />
            <h4 className="titleContent">
              Safe and reliable shipment of your product is out top priority
            </h4>
            <div className="dateContent">12 Desember 2021</div>
            <div className="hashtagContent">
              #ship #shipping #world #business
            </div>
            <div className="descriptionContent ">
              a book or other written or printed work, regarded in terms of its
              content rather. a book or other writt ...
            </div>
            <div className="readMoreContent ">Read More</div>
          </div>
        </div>
        {/* end */}

        {/* kolom-2 */}
        <div className="MiddleColoumn_2">
          {/* content */}
          <div className="boxColoumn_2">2</div>
          <div className="boxColoumn_2">2</div>
          <div className="boxColoumn_2">2</div>
        </div>
      </div>

      {/* page number */}
      <div className="globalBox">
        <div className="prevPage">Prev</div>
        <div className="nextPage">Next</div>
        <div className="borderPageOne">
          <div className="pageOne">1</div>
        </div>
        <div className="pageTwo">2</div>
      </div>
    </>
  );
};

export default Middle;
