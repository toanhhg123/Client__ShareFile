import { Alert, Col, Row, Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileCard from "../components/home/FileCard";
import FileCardMini from "../components/home/FileCardMini";
import Layout from "../layout/Layout";
import { getAllFileRedux } from "../features/file/fileActions";
import { showConfirmError } from "../error/showModalError";

const Home = () => {
  const dispatch = useDispatch();
  const {
    data: { files },
    isloading,
    error,
  } = useSelector((state) => state.file);

  console.log(files);

  useEffect(() => {
    dispatch(getAllFileRedux({ pageIndex: 1 }));
  }, [dispatch]);

  useEffect(() => {
    error && showConfirmError(error);
  }, [error]);

  return (
    <Layout>
      <Row>
        <Col md={16} sm={24}>
          <Spin spinning={isloading}>
            {[...files].map((x) => (
              <FileCard title={x.name} key={x._id} desc={x.desc} _id={x._id} />
            ))}
          </Spin>
        </Col>

        <Col md={8} sm={24}>
          <div className="p-2">
            <Alert message="Files news" type="info" />

            <FileCardMini />
            <FileCardMini />
            <FileCardMini />
            <FileCardMini />
            <FileCardMini />
          </div>
        </Col>
      </Row>
    </Layout>
  );
};
export default Home;
