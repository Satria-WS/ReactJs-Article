import React from "react";
import ReactDom from "react-dom";
import newsHot from "../../assets/images/newsHot.png";

import NewsItem from "../../backend/Newsitem";
import NewsList from "../../backend/NewsList";

const Middle = () => {
  return (
    <>
      {/* backend */}

      {/* kolom-1 */}
      <div className="globalBox">
        <div className="MiddleColoumn_1">
          <NewsList />
        </div>

        {/* end */}

        {/* kolom-2 */}
        <div className="MiddleColoumn_2">
          <NewsList />
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
