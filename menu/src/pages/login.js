import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn, getCsrfToken, getSession } from 'next-auth/react'
import LoginForm from '@parrot/common'

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (session !== null) {
        return {
            redirect: {
                destination: process.env.NEXT_PUBLIC_DASHBOARD_PATH,
                permanent: false,
            },
        }
    }

    const csrfToken = await getCsrfToken(context)

    return {
        props: {
            csrfToken: csrfToken || null,
        },
    }
}

function Login({ csrfToken }) {
    const router = useRouter()
    const [errors, setErrors] = useState(null)

    const handleSubmit = async (values) => {
        const response = await signIn('credentials', {
            redirect: false,
            username: values.username,
            password: values.password,
            callbackUrl: `${window.location.origin}/dashboard`,
        })

        if (response?.error) {
            setErrors(response.error)
        } else {
            setErrors(null)
        }

        if (response.url) {
            await router.push(response.url)
        }
    }

    return (
        <div className="login">
            <Head>
                <title>Login</title>
            </Head>
            <main className="main">
                <LoginForm csrfToken={csrfToken} errors={errors} onSubmit={handleSubmit} />
            </main>
        </div>
    )
}

export default Login
