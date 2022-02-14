import React from 'react'
import styles from "@styles/components/sidebar.module.scss"
import Image from 'next/image';


const Sidebar = (props: any) => {

    const {openSide} = props

    return (
        <div className={openSide ? styles.sidebar_view : styles.sidebar_hide}>
            <ul>
                <li>
                    <Image
                      src="/bonobono.jpg"
                      alt="bonobono"
                      width={200}
                      height={200}
                      className={styles.pics}
                     />
                </li>
                <li>이름</li>
                <li>생년월일</li>
                <li>contact</li>
            </ul>
        </div>
    );
}


export default Sidebar