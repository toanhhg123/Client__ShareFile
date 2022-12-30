import { LinkOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const { Header } = Layout;

const App = () => {
  return (
    <Layout>
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          items={items}
        />
      </Header>
    </Layout>
  );
};

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to={"/home"}>Home</Link>, "home", <LinkOutlined />),
];
export default App;
