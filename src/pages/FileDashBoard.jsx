import { Button, Form, Input, Select, Upload } from "antd";
import React, { useEffect, useState } from "react";
import DashBoard from "./DashBoarsh";
import { getAllSubject } from "../axios/subjects";
import { PlusOutlined } from "@ant-design/icons";
import { uploadFile } from "../axios/file";
import { useNavigate } from "react-router-dom";

const FileDashBoard = () => {
  const [file, setFile] = useState({
    name: "",
    desc: "",
    subjects: {},
  });

  const [fileSelect, setDFileSelect] = useState(undefined);
  const [subjects, setSubjects] = useState([]);

  const navigate = useNavigate();

  const onFinish = async (values) => {
    if (fileSelect)
      uploadFile({ ...values, file: fileSelect }).then((res) =>
        navigate("/dashboard/fileList")
      );
  };

  useEffect(() => {
    getAllSubject().then((res) => {
      setSubjects(res);
      if (res.length) setFile((pre) => ({ ...pre, subjects: res[0] }));
    });
  }, []);
  return (
    <DashBoard>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        style={{
          padding: "3rem",
          maxWidth: "400px",
          margin: "auto",
        }}
      >
        <h1>Add new File</h1>
        <Form.Item name="name">
          <Input placeholder="name" />
        </Form.Item>
        <Form.Item name="desc">
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item label="subjects" name={"subjects"}>
          <Select
            value={file.subjects._id}
            onSelect={(e) => {
              setFile({ ...file, subjects: subjects.find((x) => x._id === e) });
            }}
          >
            {subjects.map((x) => (
              <Select.Option key={x._id} value={x._id}>
                {x.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload
            onChange={(e) => {
              setDFileSelect(e.file.originFileObj);
            }}
            listType="picture-card"
          >
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </DashBoard>
  );
};

export default FileDashBoard;
