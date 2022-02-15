import React from "react"
import styles from "@styles/components/nav.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import Image from "next/image"

const Nav = ({ openSide, setOpenSide }: any) => {
    return (
        <div className={styles.Nav_whole}>
            <div onClick={() => setOpenSide(!openSide)}>
                <FontAwesomeIcon icon={faBars} style={{ fontSize: "50px" }} />
            </div>
            <p onClick={() => window.location.href = "/" }>KBSL :: Jannavi</p>
        </div>
    )
}

export default Nav
