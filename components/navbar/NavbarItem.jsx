import React from 'react'
//scss
import styles from "./NavbarItem.module.scss"
//icon
import { GoTriangleDown } from "react-icons/go";

const NavbarItem = ({label}) => {
  return (
    <div className={styles.fontadj}>
        {label}
        <GoTriangleDown className={styles.icon} />
    </div>
  )
}

export default NavbarItem