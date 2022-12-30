import { Button } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllFileRedux } from "../features/file/fileActions";
import DashBoard from "./DashBoarsh";

const FileList = () => {
  const {
    data: { files },
    isloading,
    error,
  } = useSelector((state) => state.file);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFileRedux({ pageIndex: 1 }));
  }, [dispatch]);

  return (
    <DashBoard>
      <div class="ant-table">
        <div class="ant-table-container">
          <div class="ant-table-content">
            <table>
              <colgroup></colgroup>
              <thead class="ant-table-thead">
                <tr>
                  <th rowspan="2" scope="col" class="ant-table-cell">
                    _id
                  </th>
                  <th rowspan="2" scope="col" class="ant-table-cell">
                    Tên Hiển Thị
                  </th>
                  <th rowspan="2" scope="col" class="ant-table-cell">
                    Loại File
                  </th>
                  <th rowspan="2" scope="col" class="ant-table-cell">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="ant-table-tbody">
                {files.map((x) => (
                  <tr
                    key={x._id}
                    data-row-key="1"
                    class="ant-table-row ant-table-row-level-0"
                  >
                    <td class="ant-table-cell">{x._id}</td>
                    <td class="ant-table-cell">{x.name}</td>
                    <td class="ant-table-cell">{x.type}</td>

                    <td class="ant-table-cell">
                      <div class="ant-space css-k83k30 ant-space-horizontal ant-space-align-center">
                        <div class="ant-space-item"></div>
                        <div class="ant-space-item">
                          <Button type="primary" danger>
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

export default FileList;
