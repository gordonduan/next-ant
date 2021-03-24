import { Layout, Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import React from 'react'

const { Header } = Layout;

const index = (props) => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: props.toggle,
      })}
    </Header>
  );
}

export default index;
