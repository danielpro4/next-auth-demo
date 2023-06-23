import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from 'antd'
import UserItem from '@/components/UserItem'
import StoreItem from '@/components/StoreItem'
import { getMyStores } from '@/redux/actions/App'

const { Header, Content, Footer } = Layout

const AppLayout = ({ session, children }) => {
    const dispatch = useDispatch()
    const stores = useSelector((state) => state.stores)

    useEffect(() => {
        dispatch(getMyStores())
    }, [session, dispatch])

    return (
        <Layout>
            <Header className="header flex justify-between items-center bg-red-parrot-500">
                <div className="w-auto flex items-center">
                    <div className="p4 logo--white mr-8">
                        <img className="logo" src="/logo.svg" width={80} alt="parrot" />
                    </div>
                    <StoreItem stores={stores} />
                </div>
                <UserItem session={session} stores={stores} />
            </Header>
            <Content className="site-layout-background">{children}</Content>
            <Footer className="flex justify-center text-xs">© danielpro5 - {new Date().getFullYear()}</Footer>
        </Layout>
    )
}

export default AppLayout
