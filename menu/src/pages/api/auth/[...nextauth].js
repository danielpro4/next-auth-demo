import got from 'got'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import endpoints from '@/config/endpoints'

const AUTH_JWT_SECRET = process.env.AUTH_JWT_SECRET

const providers = [
    CredentialsProvider({
        name: 'Credentials',
        authorize: async (credentials) => {
            try {
                const payload = {
                    password: credentials.password,
                    username: credentials.username,
                }

                const options = {
                    json: payload,
                    responseType: 'json',
                }

                const response = await got.post(endpoints.auth.login, options)

                if (!response) {
                    throw new Error('Usuario y contraseña inválidos')
                }

                // If not error and we have user data, return it
                if (response.body) {
                    return { data: response.body }
                }

                // Return null if user data could not be retrived
                return null
            } catch (error) {
                console.log('error::', error.message)
                // Redirecting to the login page with error messsage in the URL
                throw new Error('Usuario y contraseña inválidos')
            }
        },
    }),
]

const callbacks = {
    async jwt({ token, user }) {
        if (user?.data) {
            token.user = user.data
        }

        return Promise.resolve(token)
    },

    async session({ session, token }) {
        session.user = token.user
        return Promise.resolve(session)
    },
}

const options = {
    debug: process.env.NODE_ENV === 'development',
    site: process.env.NEXTAUTH_URL,
    session: {
        jwt: false,
        maxAge: 60 * 25, // 30 min
    },
    jwt: {
        secret: AUTH_JWT_SECRET,
        encryption: false,
    },
    providers,
    callbacks,
    pages: {
        error: '/login', // Changing the error redirect page to our custom login page
    },
}

const AuthApi = (req, res) => NextAuth(req, res, options)

export default AuthApi
