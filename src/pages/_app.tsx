
import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import "@styles/globals.scss"
import "@styles/font.scss"
import Layout from "@components/ui/Layout"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
        <Layout>
            <Component {...pageProps} />
            <ToastContainer position="bottom-right" autoClose={3500} />
            </Layout>
        </>
    )
}

export default MyApp
