import { DownOutlined, FolderOpenOutlined } from "@ant-design/icons";
import {
  AutoComplete,
  Avatar,
  Button,
  Dropdown,
  Input,
  Space,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSpecializeds } from "../axios/specializedAxios";

const items = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Profile
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
        Logout
      </a>
    ),
    key: "1",
  },
];

const searchResult = (query) =>
  new Array(5)
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;

      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{100.0} results</span>
          </div>
        ),
      };
    });

const Header = () => {
  //state
  const [options, setOptions] = useState([]);
  const [specializeds, setSpecializeds] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  // efect
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  useEffect(() => {
    getSpecializeds().then((res) => {
      setSpecializeds(res);
    });
    console.log("reload");
  }, []);
  const onSelect = (value) => {
    console.log("onSelect", value);
  };

  const items = specializeds.map((x) => ({
    label: x.name,
    key: x._id,
    icon: <FolderOpenOutlined />,
  }));

  const handleMenuClick = (e) => {
    navigate("/", {
      state: { specialized: e.key },
    });
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="header shadow py-2">
      <div className="container  d-flex  align-items-center justify-content-between">
        <Typography.Title level={3} style={{ width: "300px" }}>
          Logo
        </Typography.Title>

        <div className="w-100">
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Chuyên Ngành
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>

        <div className="d-flex align-items-center gap-2">
          <AutoComplete
            popupClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={400}
            style={{
              width: 250,
            }}
            options={options}
            onSearch={handleSearch}
            onSelect={onSelect}
          >
            <Input.Search size="large" placeholder="input here" />
          </AutoComplete>

          <Dropdown
            menu={{
              items,
            }}
          >
            <Avatar src="https://joeschmoe.io/api/v1/random" />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
