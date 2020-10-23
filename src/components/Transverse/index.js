import React, { PureComponent } from 'react';
import { Menu, Icon, Divider } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';

class Transverse extends PureComponent {
  constructor(props) {
    super(props);
    this.menus = props.menuData;
    this.state = {
      selected:false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('menuData' in nextProps) {
      const { menuData = [] } = nextProps;
      this.flatMenuKeys = this.getFlatMenuKeys(menuData);
      this.menus = menuData;
    }
  }

  getFlatMenuKeys(menus) {
    let keys = [];
    menus.forEach(item => {
      if (item.children) {
        keys = keys.concat(this.getFlatMenuKeys(item.children));
      }
      keys.push(item.path);
    });
    return keys;
  }

    render() {
      const SubMenu = Menu.SubMenu;
      return (
        <Menu
          theme='dark'
          mode="horizontal"
          style={{ backgroundColor: 'transparent', borderBottom: 'none',position:"absolute",top:"0",left:"180px" }}
        >
          {this.menus.map((item,i)=>{
            const menus = (<SubMenu
              key={i}
              title={<span style={{lineHeight:'50px',}}><Icon type={item.icon} />{item.name}</span>}
              className={`${sessionStorage.getItem('userStyleName')} `}
            >
              {item.children.map((child,j)=>{
                return (
                  child.children?(
                    <SubMenu
                      key={`${i}-${j}`}
                      className=""
                      title={child.name}
                    >
                      {child.children.map((third,k)=>{
                        return (
                          <Menu.Item key={`${i}-${j}-${k}`}>
                            <a rel="noopener noreferrer" href={third.path}>{third.name}</a>
                          </Menu.Item>
                        )
                      })}
                    </SubMenu>
                  ):(
                    <Menu.Item key={`${i}-${j}`}>
                      <a rel="noopener noreferrer" href={`#${child.path}`}>{child.name}</a>
                    </Menu.Item>
                  )
                )
              })}
            </SubMenu>)
            return menus;
          })}
        </Menu>
      )
    }
}

export default connect(({global}) => ({
  theme: global.theme,
}))(Transverse);
