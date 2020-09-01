import Head from 'next/head'
import Layout from '../../components/layout'

export default function First(){
    return (
        <Layout>
            <Head>
                <title>FirstOne</title>
            </Head>
            <p>Hi, I'm a first post:)</p>
        </Layout>
    )
}