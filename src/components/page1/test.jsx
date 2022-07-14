import React from "react";
import facebook from "../../assets/images/icons/fb.png";
import youtube from "../../assets/images/icons/Youtube.png";
import instagram from "../../assets/images/icons/iG.png";

function TestCode() {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-muted">
              &copy; 2022 Sislog. All Rights Reserved.
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <img src={youtube} alt="youtube" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default TestCode;
