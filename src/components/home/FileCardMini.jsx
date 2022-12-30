import { ClockCircleOutlined, MessageOutlined } from "@ant-design/icons";
import React from "react";

const FileCardMini = ({ img, school, title, desc }) => {
  return (
    <a
      href="/"
      className="d-flex hover position-relative border-bottom my-2 py-3 w-100"
    >
      <img
        width={100}
        height={100}
        alt="example"
        src="https://tailieuvnu.com/wp-content/uploads/2021/10/23/logo-tai-lieu-vnu-loop.png"
        className="shadow"
      />

      <div className="p-3">
        <h5>Đề thi Tối ưu hóa lần 2 kỳ 2 năm học 2021-2022 – UET</h5>
        <div className="d-flex gap-3">
          <span className="d-flex align-items-center gap-1 text-secondary">
            <ClockCircleOutlined />
            11/02/2020
          </span>
          <span className="d-flex align-items-center gap-1 text-secondary">
            <MessageOutlined />0
          </span>
        </div>
      </div>
    </a>
  );
};

export default FileCardMini;
