import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import React from "react";
const items = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item（disabled）",
    key: "3",
    disabled: true,
  },
];
const ItemLinkDropDown = ({ text, itemDowns }) => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a href="#/" className="fw-blod fs-5" onClick={(e) => e.preventDefault()}>
      {text}
    </a>
  </Dropdown>
);
export default ItemLinkDropDown;
