import { QueryClient, QueryClientProvider } from 'react-query'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import configureStore from '@/redux/store/configureStore'
import AppLayout from '@/containers/AppLayout'

import 'antd/dist/antd.css'
import 'simplebar/src/simplebar.css'
import '../styles/tailwind.css'

import '../styles/globals.css'
import '../styles/antd.theme.css'

const store = configureStore()

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: true,
            refetchOnmount: false,
            refetchOnReconnect: true,
            retry: false,
            staleTime: 0, // 5 * 60 * 1000
        },
    },
})

function App({ Component, pageProps: { session, ...pageProps } }) {
    if (session) {
        return (
            <SessionProvider session={session}>
                <Provider store={store}>
                    <QueryClientProvider client={queryClient}>
                        <AppLayout session={session}>
                            <Component {...pageProps} />
                        </AppLayout>
                    </QueryClientProvider>
                </Provider>
            </SessionProvider>
        )
    }

    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default App
