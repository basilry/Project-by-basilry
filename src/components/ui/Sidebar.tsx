import React from "react"
import styles from "@styles/components/sidebar.module.scss"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDay, faFile, faPencil } from "@fortawesome/free-solid-svg-icons"

const Sidebar = (props: any) => {
    const { openSide, setOpenSide } = props

    return (
        <div className={openSide ? styles.sidebar_view : styles.sidebar_hide}>
            <ul>
                <Link href="/">
                    <li onClick={() => setOpenSide(false)}>
                        <p>Main</p>
                        <p>메인</p>
                    </li>
                </Link>
                <Link href="/category/aboutme">
                    <li onClick={() => setOpenSide(false)}>
                        <p>About Me</p>
                        <p>누구냐 난</p>
                    </li>
                </Link>
                <Link href="/category/portpolio">
                    <li onClick={() => setOpenSide(false)}>
                        <p>Portpolio</p>
                        <p>포트폴리오</p>
                    </li>
                </Link>
                <Link href="/category/studynow">
                    <li onClick={() => setOpenSide(false)}>
                        <p>Study Now</p>
                        <p>이걸 학습 중이에요</p>
                    </li>
                </Link>
                <Link href="/category/plan">
                    <li onClick={() => setOpenSide(false)}>
                        <p>Plan</p>
                        <p>제 계획은요</p>
                    </li>
                </Link>
                <Link href="/category/contact">
                    <li onClick={() => setOpenSide(false)}>
                        <p>Contact</p>
                        <p>연락주세요 :)</p>
                    </li>
                </Link>
            </ul>

            <div className={styles.nickname}>KBSL :: Jannavi</div>
        </div>
    )
}

export default Sidebar
