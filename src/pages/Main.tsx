import React from "react"
import Layout from "@components/ui/Layout"
import styles from "@styles/pages/main.module.scss"
import ContentsWrapper from "@components/ui/ContentsWrapper"

const Main = () => {
    return (
            <section className={styles.main_whole}>
                <ContentsWrapper>
                    <div>
                        세상을 바꾸는 프론트엔드 개발자
                    </div>
                </ContentsWrapper>
            </section>
    )
}

export default Main
