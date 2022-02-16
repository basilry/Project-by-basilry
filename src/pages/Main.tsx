import React from "react"
import Layout from "@components/ui/Layout"
import styles from "@styles/pages/main.module.scss"

const Main = () => {
    return (
        <Layout>
            <section className={styles.main_whole}>
                {/* <div> */}
                    <p>{"Const Life = () => {"}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;A Law student</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Who dreams of becoming</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a real Front-End Developer.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;진짜</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;프론트엔드 개발자를 꿈꾸는</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;법학도.</p>
                    <br />
                    <p>&nbsp;&nbsp;{"return 'Reality'"}</p>
                    <p>{"};"}</p>
                {/* </div> */}
            </section>
        </Layout>
    )
}

export default Main
