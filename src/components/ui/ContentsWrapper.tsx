import React from 'react'
import styles from "../../styles/components/common.module.scss"


const ContentsWrapper = ({children}: any) => {
    return (
        <div className={styles.common_wrapper}>
            <div className={styles.common_area}>
                {children}
            </div>
        </div>
    );
}


export default ContentsWrapper