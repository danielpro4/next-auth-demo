import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Head from 'next/head'
import { getSession, useSession } from 'next-auth/react'
import { setAuthData } from '@/redux/actions/App'
import Dashboard from '@/containers/Dashboard'

export const getServerSideProps = async (context) => {
    const session = await getSession(context)

    if (session == null) {
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

export default function Welcome() {
    const { data: session, status } = useSession()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAuthData(session.user))
    }, [session, dispatch])

    if (session === null) {
        return <div>Acceso denegado, status: {status}</div>
    }

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Dashboard session={session} />
        </>
    )
}
