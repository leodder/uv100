import React from 'react';
//scss
import styles from './Navbar.module.scss';
//icon
import { IoMdCart } from "react-icons/io";
//components
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <div className={styles.container}>
    <nav className={styles.navbar}>
            <div className={styles.logoposition}>
                <img src='UV100.png' alt="logo" className={styles.logo} />
            </div>
        <div className={styles.itemposition} >
            <div className={styles.itemleft}>
                <NavbarItem label="最新資料" />
                <NavbarItem label="女性館" />
                <NavbarItem label="男性館" />
                <NavbarItem label="孩童館" />
                <NavbarItem label="配件館" />
                <NavbarItem label="品牌資訊" />
            </div>
            <div className={styles.elseright}>
                <div className={styles.acc}>我的帳號</div>
                <div className={styles.cart}>
                    購物車
                    <IoMdCart />
                </div>
            </div>
        </div>
    </nav>
    <div className={styles.imgcontainer}>
        <img src='memberevent.png' alt='memberevent' />
    </div>
    </div>
  )
}

export default Navbar