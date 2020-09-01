import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <section>
        Read <Link href="/posts/first"><a>First one!</a></Link>
      </section>
    </Layout>
  )
}
