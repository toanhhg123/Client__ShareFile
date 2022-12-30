import { LinkOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const DashBoard = ({ children }) => {
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        style={{ height: "100vh" }}
        theme="light"
      >
        <div
          className="logo"
          style={{
            textAlign: "center",
            padding: "16px",
            fontSize: "24px",
            fontWeight: "700",
          }}
        >
          Share File
        </div>
        <Menu items={items} />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
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
  getItem(
    <Link to={"/dashboard/files"}>CreateFile</Link>,
    "file",
    <LinkOutlined />
  ),
  getItem(
    <Link to={"/dashboard/fileList"}>Files</Link>,
    "filesList",
    <LinkOutlined />
  ),
  getItem(
    <Link to={"/dashboard/filemanager"}>Files Manager</Link>,
    "filemanager",
    <LinkOutlined />
  ),
  getItem(
    <Link to={"/dashboard/usermanager"}>User Manager</Link>,
    "usermanager",
    <LinkOutlined />
  ),
];
export default DashBoard;
