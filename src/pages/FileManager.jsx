import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { deleteFile, getAllFileOfUser } from "../axios/file";
import { showConfirmError, showConfirmModal } from "../error/showModalError";
import DashBoard from "./DashBoarsh";

const FileManager = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getAllFileOfUser()
      .then((res) => {
        setFiles(res);
      })
      .catch((e) => showConfirmError(e.message));
  }, []);

  const handleDelete = (id) => {
    deleteFile(id)
      .then((res) => {
        showConfirmModal("delete document suceess", () => {});
      })
      .catch((e) => {
        showConfirmError(e.message);
      });
  };

  return (
    <DashBoard>
      <div className="ant-table">
        <div className="ant-table-container">
          <div className="ant-table-content">
            <table>
              <colgroup></colgroup>
              <thead className="ant-table-thead">
                <tr>
                  <th rowSpan="2" scope="col" className="ant-table-cell">
                    _id
                  </th>
                  <th rowSpan="2" scope="col" className="ant-table-cell">
                    Tên Hiển Thị
                  </th>
                  <th rowSpan="2" scope="col" className="ant-table-cell">
                    Loại File
                  </th>
                  <th rowSpan="2" scope="col" className="ant-table-cell">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="ant-table-tbody">
                {files.map((x) => (
                  <tr
                    key={x._id}
                    data-row-key="1"
                    className="ant-table-row ant-table-row-level-0"
                  >
                    <td className="ant-table-cell">{x._id}</td>
                    <td className="ant-table-cell">{x.name}</td>
                    <td className="ant-table-cell">{x.type}</td>

                    <td className="ant-table-cell">
                      <div className="ant-space css-k83k30 ant-space-horizontal ant-space-align-center">
                        <div className="ant-space-item"></div>
                        <div className="ant-space-item">
                          <Button
                            type="primary"
                            danger
                            onClick={() => handleDelete(x._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashBoard>
  );
};

export default FileManager;
