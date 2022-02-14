import React, { useState } from "react"
import Nav from "./Nav"
import Sidebar from "./Sidebar"
import styles from "@styles/components/layout.module.scss"

const Layout = ({ children }: any) => {
    const [openSide, setOpenSide] = useState(false)

    return (
        <div className={styles.layout_whole}>
            <div className={styles.Nav_sitcky}>
                <Nav openSide={openSide} setOpenSide={setOpenSide} />
                <Sidebar openSide={openSide} />
            </div>
            <div className={styles.contents}>{children}</div>
        </div>
    )
}

export default Layout
