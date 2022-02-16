import React from "react"
import styles from "@styles/components/sidebar.module.scss"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDay, faFile, faPencil } from "@fortawesome/free-solid-svg-icons"

const Sidebar = (props: any) => {
    const { openSide } = props

    return (
        <div className={openSide ? styles.sidebar_view : styles.sidebar_hide}>
            <ul>
                <li onClick={() => (window.location.href = "/")}>
                    <p>Main</p>
                    <p>메인</p>
                </li>
                <Link href="/category/aboutme">
                    <li>
                        <p>About Me</p>
                        <p>누구냐 난</p>
                    </li>
                </Link>
                <Link href="/category/portpolio">
                    <li>
                        <p>Portpolio</p>
                        <p>포트폴리오</p>
                    </li>
                </Link>
                <Link href="/category/studynow">
                    <li>
                        <p>Study Now</p>
                        <p>이걸 학습 중이에요</p>
                    </li>
                </Link>
                <Link href="/category/plan">
                    <li>
                        <p>Plan</p>
                        <p>제 계획은요</p>
                    </li>
                </Link>
                <Link href="/category/contact">
                    <li>
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
