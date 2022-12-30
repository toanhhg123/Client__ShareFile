import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { getAllUser } from "../axios/user";
import { showConfirmError } from "../error/showModalError";
import DashBoard from "./DashBoarsh";

const UserManager = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("render");

    getAllUser()
      .then((res) => setUsers(res))
      .catch((e) => showConfirmError(e.message));
  }, []);

  const handleDelete = (id) => {
    // deleteFile(id)
    //   .then((res) => {
    //     showConfirmModal("delete document suceess", () => {});
    //   })
    //   .catch((e) => {
    //     showConfirmError(e.message);
    //   });
  };

  return (
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
                  last name
                </th>
                <th rowSpan="2" scope="col" className="ant-table-cell">
                  first name
                </th>
                <th rowSpan="2" scope="col" className="ant-table-cell">
                  email
                </th>
                <th rowSpan="2" scope="col" className="ant-table-cell">
                  role
                </th>
                <th rowSpan="2" scope="col" className="ant-table-cell">
                  actions
                </th>
              </tr>
            </thead>
            <tbody className="ant-table-tbody">
              {users.map((x) => (
                <tr
                  key={x._id}
                  data-row-key="1"
                  className="ant-table-row ant-table-row-level-0"
                >
                  <td className="ant-table-cell">{x._id}</td>
                  <td className="ant-table-cell">{x.lastNmae}</td>
                  <td className="ant-table-cell">{x.firstName}</td>
                  <td className="ant-table-cell">{x.email}</td>
                  <td className="ant-table-cell">{x.role}</td>

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
  );
};

export default UserManager;
