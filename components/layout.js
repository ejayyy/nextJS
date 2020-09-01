import Head from 'next/head'
import styles from './layout.module.sass'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'EJ'
export const siteTitle = 'test'

export default function Layout({ children, home }) {
    return(
    <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="EJ's blog" />
        </Head>
        <header className={styles.header}>
            {home ? (
                <>
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            ) : (
                <>
                    <Link href="/">
                        <a>profile</a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                    </h2>
                </>
            )}
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </div>
        )}
    </div>
    )
}