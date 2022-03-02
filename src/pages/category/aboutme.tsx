import React from 'react'
import styles from "../../styles/components/common.module.scss"


const aboutme = () => {
    return (
        <div className={styles.common_wrapper}>
            <div className={styles.common_area}>
                저는요...

                <div>
                    배색에 대한 고민
                    <p>1. 밝은 색상 - 밝은 주황, 짙은 파랑, 짙은 녹색</p>
                    <p>2. 어두운 색상 - 흰색, 회색, 짙은 회색, 검은색</p>
                </div>
            </div>
        </div>
    );
}


export default aboutme