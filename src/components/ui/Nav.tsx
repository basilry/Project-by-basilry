import React, { useState } from "react"
import styles from "@styles/components/nav.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ openSide, setOpenSide }: any) => {
    return (
        <div className={styles.Nav_whole}>
            <div onClick={() => setOpenSide(!openSide)}>
                <FontAwesomeIcon icon={faBars} style={{fontSize: "50px"}} />
            </div>
            <ul>
                <li onClick={() => console.log(1)}>Projects</li>
                <li onClick={() => console.log(2)}>Study Now</li>
                <li onClick={() => console.log(3)}>Plan</li>
            </ul>
        </div>
    )
}

export default Nav
