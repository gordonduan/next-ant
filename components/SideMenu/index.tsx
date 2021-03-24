import { Layout, Menu } from 'antd';
import MenuConfig from '../../config/menuConfig';
import Link from "next/link";

const { SubMenu } = Menu;
const { Sider } = Layout;

const index = (props) => {
  const renderMenu = (menu) => {
    return menu.map((item) => {
      if (item.children) {
        return(
          <SubMenu title = {item.title} key = {item.key}>
              {renderMenu(item.children)}
          </SubMenu>
        )
      }
      return  <Menu.Item key = {item.key}>
                <Link href={item.key}>
                  <a>{item.title}</a>
                </Link>
              </Menu.Item>
    })
  }

  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="logo"/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']}>
        {renderMenu(MenuConfig)}
      </Menu>
    </Sider>
  );
}

export default index;
