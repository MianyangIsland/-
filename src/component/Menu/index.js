import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
         WechatOutlined, 
         DesktopOutlined,
         ShoppingFilled,
         UserOutlined,
         CloudUploadOutlined
        } from '@ant-design/icons';
import { Menu } from 'antd';
import './index.css'



const items = [
  
  {
    key: 'shopping',
    icon: <ShoppingFilled style={{fontSize: 24}}/>,
    style:{
      paddingLeft: 15
    }
  },
  {
    key: 'message',
    icon: <WechatOutlined style={{fontSize: 24}} />,
    style:{
      paddingLeft: 15
    }
  },
  {
    key: 'person',
    icon: <UserOutlined style={{fontSize: 24}}/>,
    style:{
      paddingLeft: 15
    }
  },
  {
    key: 'publish',
    icon: <CloudUploadOutlined style={{fontSize: 24}}/>,
    style:{
      paddingLeft: 15
    }
  },
  {
    key: 'community',
    icon: <DesktopOutlined style={{fontSize: 24}}/>,
    style:{
      paddingLeft: 15
    }
  },

];
const MyMeun = () => {
  const [current, setCurrent] = useState('');
  const navigate = useNavigate();
  const onClick = (e) => {
    switch(e.key) {
      case 'shopping': 
      navigate('/main/shopping');
      break;
      case 'message': 
      navigate('/main/chat');
      break;
      case 'person':
        navigate('/main/person');
        break;
      case 'publish': 
        navigate('/main/publish');
        break;
      case 'community': 
        navigate('/main/community');
        break;
      default :
      navigate('/');
      break;
    }
    setCurrent(e.key);
  };
  return (
    <Menu 
      mode="inline"
      theme="dark"
      onClick={onClick} 
      selectedKeys={[current]} 
      items={items} 
      style={{
        width: '100%',
        height: 670,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: 0,
        paddingLeft: 0
      }}
    />
  )
};
export default MyMeun;