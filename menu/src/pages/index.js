import Head from 'next/head'
import { getSession, useSession } from 'next-auth/react'

export const getServerSideProps = async (context) => {
    const session = await getSession(context)

    if (session === null) {
        return {
            redirect: {
                destination: process.env.NEXT_PUBLIC_LOGIN_PATH,
                permanent: false,
            },
        }
    }

    return {
        props: { session },
    }
}

export default function Home() {
    const { data: session, status } = useSession()

    if (session === null) {
        return <div>Acceso denegado, status:{status}</div>
    }

    return (
        <div className="container">
            <Head>
                <title>Home</title>
                <meta name="description" content="frontend conding challenge" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}
