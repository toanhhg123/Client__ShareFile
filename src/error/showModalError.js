import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Alert, Modal } from "antd";

const { error, success } = Modal;
export const destroyAllModal = () => {
  Modal.destroyAll();
};

export const showConfirmError = (message) => {
  error({
    icon: <ExclamationCircleOutlined />,

    content: <Alert message={message} type="error" />,
    onOk() {},
    onCancel() {},
  });
};

export const showConfirmModal = (message, onOk) => {
  success({
    icon: <ExclamationCircleOutlined />,

    content: <Alert message={message} type={"success"} />,
    onOk() {
      if (onOk) onOk();
    },
    onCancel() {},
  });
};
