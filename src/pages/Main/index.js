import React from 'react';
import { Avatar } from 'antd';
import { Routes,Route } from "react-router-dom";
import styles from './index.module.css';
import Menu from '../../component/Menu';
import ShoppingView from '../shopping';
import ContactView from '../Contact';
import Person from '../Person';
import PublishView from '../Publish';
import CommunityView from '../Community';
const url = `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`

const Main = () => {
    return (
      <div className={styles.main}>
         <div className={styles.menu}>
            <Avatar 
              size={58} 
              src={<img src={url} alt="avatar" />} 
              style={{marginTop: 20}}
              />
            <Menu/>
         </div>
         <div className={styles.view}>
            <Routes>
              <Route path='shopping' element={<ShoppingView/>}></Route>
              <Route path='chat' element={<ContactView/>}></Route>
              <Route path='person' element={<Person/>}></Route>
              <Route path='publish' element={<PublishView/>}></Route>
              <Route path='community' element={<CommunityView/>}></Route>
            </Routes>
         </div>
      </div>
    )
}

export default Main;