import React from 'react';
import { Avatar } from 'antd';
import styles from './index.module.css';
import Menu from '../../component/Menu';

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
             
         </div>
      </div>
    )
}

export default Main;