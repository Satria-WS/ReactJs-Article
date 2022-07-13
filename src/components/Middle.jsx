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
            <h3>Safe and reliable</h3>
          </div>
          <div className="boxColoumn_1">
            image
            <img />
          </div>
          <div className="boxColoumn_1">
            image
            <img />
          </div>
        </div>

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
