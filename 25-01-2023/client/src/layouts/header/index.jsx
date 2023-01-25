import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { PhoneOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <div id="header">
      <div>
        <Link>
          <img
            src="https://preview.colorlib.com/theme/course/images/logo.png"
            alt=""
          />
          <h1>
            <strong>Course</strong>
          </h1>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/add-course"}>ADD Product</Link>
          </li>
          <li>
            <Link>COURSES</Link>
          </li>
          <li>
            <Link>ELEMENTS</Link>
          </li>
          <li>
            <Link>NEWS</Link>
          </li>
          <li>
            <Link>CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className="headerend">
        <img
          src="https://preview.colorlib.com/theme/course/images/phone-call.svg"
          alt=""
        />
        <h1>+43 4566 7788 2457</h1>
      </div>
    </div>
  );
};

export default Header;
