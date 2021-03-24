import { Layout } from 'antd';
import React from 'react'

const { Content } = Layout;

const index = (props) => {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      {props.children}
    </Content>
  );
}

export default index;
