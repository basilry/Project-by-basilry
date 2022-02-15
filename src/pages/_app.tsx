
import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import "@styles/globals.scss"
import "@styles/font.scss"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <ToastContainer position="bottom-right" autoClose={3500} />
        </>
    )
}

export default MyApp
