import { ClockCircleOutlined, MessageOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import { imgs } from "../../asset/imgs";
const FileCard = ({ img, school, title, desc, _id }) => {
  return (
    <Link
      to={`/file/${_id}`}
      className="d-flex hover position-relative border-bottom my-2 py-3 w-100"
    >
      <img width={235} alt="example" src={imgs.pdf} className="shadow" />
      <p className="position-absolute p-2 bg-danger text-white m-2">
        ShareFIles.com
      </p>
      <div className="p-3">
        <h3>{title}</h3>
        <div className="d-flex gap-3">
          <span className="d-flex align-items-center gap-1 text-secondary">
            <ClockCircleOutlined />
            11/02/2020
          </span>
          <span className="d-flex align-items-center gap-1 text-secondary">
            <MessageOutlined />0
          </span>
        </div>
        <p className="text-secondary">
          {`${desc}`.substring(0, 200)}
          ....
        </p>
      </div>
    </Link>
  );
};

export default FileCard;
