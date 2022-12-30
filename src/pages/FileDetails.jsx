import {
  ClockCircleOutlined,
  DownloadOutlined,
  FacebookFilled,
  FilePdfFilled,
  MailFilled,
  MessageOutlined,
  PrinterFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Alert, Button, Card, Col, Result, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import FileCardMini from "../components/home/FileCardMini";
import Layout from "../layout/Layout";

const FileDetails = () => {
  const params = useParams();
  const {
    data: { files },
    isloading,
    error,
  } = useSelector((state) => state.file);
  const file = [...files].find((x) => x._id === params.id);

  console.log({ file });
  return (
    <Layout>
      <Row>
        {file ? (
          <Col md={16} sm={24}>
            <h3 className="my-2">
              {" "}
              Đề thi Tối ưu hóa lần 2 kỳ 2 năm học 2021-2022 – UET
            </h3>
            <div className="d-flex gap-3 border p-1">
              <span className="d-flex align-items-center gap-1 text-secondary">
                <ClockCircleOutlined />
                11/02/2020
              </span>
              <span className="d-flex align-items-center gap-1 text-secondary">
                <MessageOutlined />0
              </span>
            </div>
            <div className="my-5 d-flex gap-1">
              {buttonGroups.map((x, i) => (
                <Button
                  className="d-flex align-items-center"
                  type={x.type}
                  icon={x.icon}
                  size={"large"}
                >
                  {x.text}
                </Button>
              ))}
            </div>

            <Button
              className="d-flex align-items-center"
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              size={"large"}
            >
              DowLoad
            </Button>

            <div className="site-card-border-less-wrapper my-5">
              <Card title="Đề thi Tối ưu hóa lần 2 kỳ 2 năm học 2021-2022 – UET">
                <p>
                  Đề thi Tối ưu hóa lần 2 kỳ 2 năm học 2021-2022 – UETĐề thi Tối
                  ưu hóa lần 2 kỳ 2 năm học 2021-2022 – UETĐề thi Tối ưu hóa lần
                  2 kỳ 2 năm học 2021-2022 – UETĐề thi Tối ưu hóa lần 2 kỳ 2 năm
                  học 2021-2022 – UETĐề thi Tối ưu hóa lần 2 kỳ 2 năm học
                  2021-2022 – UETĐề thi Tối ưu hóa lần 2 kỳ 2 năm học 2021-2022
                  – UETĐề thi Tối ưu hóa lần 2 kỳ 2 năm học 2021-2022 – UET
                </p>
              </Card>
            </div>

            <Alert
              message="Các Bài viết liên quan"
              className="my-3"
              type="error"
            />

            <Row gutter={8}>
              <Col xs={12} sm={8} lg={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      className="w-100"
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <h5>
                    Đề thi Tối ưu hóa lần 2 kỳ 2 năm học 2021-2022 – UETĐề thi
                    Tối ưu hóa lần 2 kỳ 2 năm học 2021-2022
                  </h5>
                </Card>
              </Col>
            </Row>
          </Col>
        ) : (
          <Col md={16} sm={24}>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, page not found"
              extra={
                <Link type="button" className="btn btn-primary" to={"/"}>
                  Back Home
                </Link>
              }
            />
          </Col>
        )}

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

const buttonGroups = [
  {
    type: "primary",
    icon: <FacebookFilled />,
    text: "Facebook",
  },
  {
    type: "ghost",
    icon: <TwitterSquareFilled />,
    text: "Twitter",
  },
  {
    type: "danger",
    icon: <MailFilled />,
    text: "Mail",
  },
  {
    type: "dashed",
    icon: <FilePdfFilled />,
    text: "File",
  },
  {
    type: "link",
    icon: <PrinterFilled />,
    text: "Prints",
  },
];
export default FileDetails;
