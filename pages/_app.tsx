import 'antd/dist/antd.css'
import '../styles/index.css'
import { useState } from 'react'
import { Layout } from 'antd'
import SideMenu from '../components/SideMenu'
import Content from '../components/Content'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyApp = ({ Component, pageProps }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <SideMenu collapsed={collapsed}/>
      <Layout className="site-layout">
        <Header toggle={() => setCollapsed(!collapsed)} collapsed={collapsed}/>
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer/>
      </Layout>
    </Layout>
  )
}

export default MyApp
