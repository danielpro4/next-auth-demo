import { useSelector } from 'react-redux'
import { get } from 'lodash'
import { Empty } from 'antd'

import ProductsList from '@/components/ProductsList'

const Dashboard = ({ session }) => {
    const selectedStore = useSelector((state) => get(state, 'selectedStore.data', null))

    if (!selectedStore) {
        return (
            <div className="h-full grid place-content-center">
                <Empty description="No hay datos que mostrar, selecciona una tienda." />
            </div>
        )
    }

    return (
        <div className="p-4">
            <ProductsList user={session.user} selectedStore={selectedStore} />
        </div>
    )
}

export default Dashboard
