import React, { useState } from "react"
import styles from "@styles/components/nav.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCalendarDay, faFile, faPencil } from "@fortawesome/free-solid-svg-icons"

const Nav = ({ openSide, setOpenSide }: any) => {
    return (
        <div className={styles.Nav_whole}>
            <div onClick={() => setOpenSide(!openSide)}>
                <FontAwesomeIcon icon={faBars} style={{ fontSize: "50px" }} />
            </div>
            <ul>
                <li onClick={() => console.log(1)}>
                    <FontAwesomeIcon icon={faFile} style={{ fontSize: "30px" }} />
                    <p>Projects</p>
                </li>
                <li onClick={() => console.log(2)}>
                    <FontAwesomeIcon icon={faPencil} style={{ fontSize: "30px" }} />
                    <p>Study Now</p>
                </li>
                <li onClick={() => console.log(3)}>
                    <FontAwesomeIcon icon={faCalendarDay} style={{ fontSize: "30px" }} />
                    <p>Plan</p>
                </li>
            </ul>
        </div>
    )
}

export default Nav
