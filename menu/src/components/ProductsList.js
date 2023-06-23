import PropTypes from 'prop-types'
import { Collapse } from 'antd'

import SimpleBarReact from 'simplebar-react'
import ProductListItem from './ProductListItem'
import CategoryName from './CategoryName'
import Loader from './LoaderItem'
import { useFetchProducts } from '@/services/products.hook'

const { Panel } = Collapse

const ProductsList = ({ user, selectedStore }) => {
    const {
        data: categories,
        status,
        error,
    } = useFetchProducts({
        access: user.access,
        storeId: selectedStore,
    })

    if (status === 'loading') {
        return <Loader />
    }

    if (status === 'error') {
        return <div>{error}</div>
    }

    return (
        <div className="products-list" key="products">
            <SimpleBarReact className="pr-3" style={{ maxHeight: 'calc(100vh - 140px)' }}>
                {categories &&
                    Object.keys(categories).map((category, index) => {
                        return (
                            <Collapse
                                key={index}
                                className="rounded-md mb-3"
                                accordion={true}
                                expandIconPosition="right"
                            >
                                <Panel
                                    key={index}
                                    header={<CategoryName name={category} count={categories[category].length} />}
                                >
                                    {categories[category].map((product) => (
                                        <div key={product.uuid} className="mb-5">
                                            <ProductListItem product={product} />
                                        </div>
                                    ))}
                                </Panel>
                            </Collapse>
                        )
                    })}
            </SimpleBarReact>
        </div>
    )
}

ProductsList.propTypes = {
    user: PropTypes.object.isRequired,
    selectedStore: PropTypes.string,
}

export default ProductsList
