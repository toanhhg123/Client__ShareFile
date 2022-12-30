import { Breadcrumb } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const Layout = ({ children }) => {
  const location = useLocation();
  const bres = location.pathname.split("/");
  return (
    <>
      <Header />
      <div className="container shadow py-3 my-5">
        <Breadcrumb>
          {bres.map((b, i) => (
            <Breadcrumb.Item key={i}>{b}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
        {children}
      </div>
    </>
  );
};

export default Layout;
