import PropTypes from 'prop-types'
import Image from 'next/image'
import { Switch, Tooltip } from 'antd'

const ProductListItem = ({ product }) => {
    const isAvailable = product.availability === 'AVAILABLE'
    return (
        <div className="product-item">
            <div className="flex w-full justify-between gap-3">
                <div className="flex gap-3">
                    <div className="flex-grow-0 flex-shrink-0">
                        <Image src={product.imageUrl} width={80} height={80} alt={product.name} />
                    </div>
                    <div className="w-auto">
                        <div className="text-gray-800 text-sm font-medium">{product.name}</div>
                        <div className="text-gray-700 text-xs">MXN {product.price}</div>
                        <div className="text-gray-500 text-xs mt-2">${product.description}</div>
                    </div>
                </div>
                <div className="availability">
                    <Tooltip title="Status">
                        <Switch
                            className={isAvailable ? 'bg-red-parrot-500' : 'bg-gray-400'}
                            defaultChecked={isAvailable}
                        />
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

ProductListItem.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductListItem
