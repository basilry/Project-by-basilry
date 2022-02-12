import React, { useState } from 'react'
import styles from "@styles/components/nav.module.scss"


const Nav = ({openSide, setOpenSide} : any) => {

    return (
        <div className={styles.Nav_whole}>
            <ul>
                <li onClick={() => setOpenSide(!openSide)}>햄버거</li>
                <li onClick={() => console.log(1)}>Projects</li>
                <li onClick={() => console.log(2)}>Study Now</li>
                <li onClick={() => console.log(3)}>Plan</li>
            </ul>
        </div>
    );
}


export default Nav