import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Box from "@material-ui/core/Box";
import "./Aside.css";

const Aside = () => {
  let location = useLocation();
  return (
    <Box component="aside" className="aside">
      <div className="inputBox">
        <i className="lni lni-search-alt icon"></i>
        <input type="text" placeholder="검색" className="aside__input" />
      </div>
      <ul>
        <li className={location.pathname === "/" ? "selected" : ""}>
          <i
            className="lni lni-sun"
            style={{
              color: "#FF495F",
            }}
          ></i>
          <NavLink to="/">오늘 할 일</NavLink>
        </li>
        <li className={location.pathname === "/important" ? "selected" : ""}>
          <i
            className="lni lni-star"
            style={{
              color: "#8E9BFF",
            }}
          ></i>
          <NavLink to="/important">중요</NavLink>
        </li>
        <li className={location.pathname === "/planned" ? "selected" : ""}>
          <i
            className="lni lni-calendar"
            style={{
              color: "#9AFFD2",
            }}
          ></i>
          <NavLink to="/planned">계획된 일정</NavLink>
        </li>
        <li className={location.pathname === "/deleted" ? "selected" : ""}>
          <i
            className="lni lni-trash"
            style={{
              color: "#9AFFD2",
            }}
          ></i>
          <NavLink to="/deleted">삭제된 작업</NavLink>
        </li>
        <li className={location.pathname === "/task" ? "selected" : ""}>
          <i
            className="lni lni-book"
            style={{
              color: "#FFD48E",
            }}
          ></i>
          <NavLink to="/task">작업</NavLink>
        </li>
      </ul>
      <hr
        style={{
          border: "none",
          height: "0.5px",
          color: "rgba(246, 246, 248, 0.3)",
          backgroundColor: "rgba(246, 246, 248, 0.3)",
          width: "83%",
          margin: "0 auto",
        }}
      />
    </Box>
  );
};

export default Aside;
