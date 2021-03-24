import { useState, useEffect, useMemo }from 'react';
import { Form,Modal, Input, Radio, InputNumber } from 'antd';
import UserPreview from './UserPreview'
import UserForm from './UserForm'

const formItemLayout = {
  labelCol: {
      xs: { span: 18 },
      sm: { span: 6 },
  },
  wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
  },
};
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const index = ({ visible, onCreate, user, onCancel }) => {
  const [formDisabled, setFormDisabled] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(user);
    setFormDisabled(user.action == 'View'? true : false);
  }, [user]);

  const getFormContent = useMemo(() => {
    switch (user.action) {
      case 'Edit':
        return (
          <UserForm
            form={form}
          />
        );
      case 'Add':
        return (
          <UserForm
            form={form}
          />
        );
      case 'View':
        return (
          <UserPreview
            form={form}
          />
        );
    }
  },[user]);

  return (
    <Modal title={user.action +' '+ user.name} visible={visible} okText="Save" onCancel={onCancel} okButtonProps={{ disabled: formDisabled}}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      {getFormContent}
    </Modal>
  );
};

export default index;
