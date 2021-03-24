import { useState, useEffect, useRef } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { message, Card, Table, Divider, Button, Modal, } from 'antd';
import UserModal from '../UserModal';
import axios from 'axios'

const { confirm } = Modal;

const index = (props) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      width: '20%',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      width: '20%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a onClick={() => handleEdit(record.id, 'View')}>View</a>
          <Divider type="vertical" />
          <a onClick={() => handleEdit(record.id, 'Edit')}>Edit</a>
          <Divider type="vertical" />
          <a onClick={() => doDelete(record.id)}>Delete</a>
        </span>
      ),
    }
  ];
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({});

  const handleEdit = async (id, action) => {
    let { data } = await axios.get(`/api/user/${id}`);
    if(data.status !== "ok") return; //show some error
    setUser({...data.data, ...{action: action}});
    setVisible(true);
  };

  const doDelete = async (id) => {
    confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure delete this user?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteUser(id);
      },
    });
  };

  const deleteUser = async (id) => {
    var {data} = await axios.delete(`/api/user/${id}`);
    if(data.status !== "ok")  message.error('Failed');
    message.success('Successfully');
  }

  const handleAdd = async (action) => {
    setUser({action: action});
    setVisible(true);
  };

  const onCreate = async (values) => {
    console.log(values);
    if (values.id ) {
      var { data } = await axios.put(`/api/user/${values.id}`,values);
    } else {
      var { data } = await axios.post(`/api/user`,values);
    }

    if(data.status !== "ok") {
      message.error('Failed');
    }
    message.success('Successfully');
    setVisible(false);
  };

  return (
    <div>

      <Card className="card-wrap">
        <Button type="primary" onClick={() => handleAdd('Add')}>Add User</Button>
      </Card>
      <Card className="card-table">
        <Table
          columns={columns}
          rowKey={record => record.id}
          dataSource={props.dataSource}
          pagination={props.pagination}
          loading={props.loading}
          onChange={props.onChange}
        />

        <UserModal
          visible={visible}
          user={user}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </Card>
    </div>
  );
}

export default index
