import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <ToastContainer position="bottom-right" autoClose={3500} />
        </>
    )
}

export default MyApp
