import React from "react"
import styles from "@styles/components/footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBlog, faRocket } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

const Footer = () => {
    return (
        <div className={styles.footer_whole}>
            <div className={styles.copyrights}>©2022. 김바실리(잔나비) all rights reserved.</div>
            <ul>
                <li>
                    <Link href="https://blog.naver.com/basilry" passHref>
                        <FontAwesomeIcon icon={faBlog} style={{ fontSize: "30px" }} />
                    </Link>
                </li>

                <li>
                    <Link href="https://github.com/basilry" passHref>
                        <FontAwesomeIcon icon={faGithub} style={{ fontSize: "30px" }} />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/%EB%B0%94%EC%8B%A4%EB%A6%AC-%EA%B9%80-4b6611218/" passHref>
                    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "30px" }} />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.rocketpunch.com/@basilry" passHref>
                    <FontAwesomeIcon icon={faRocket} style={{ fontSize: "30px" }} />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer
