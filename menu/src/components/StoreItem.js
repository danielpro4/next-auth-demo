import PropTypes from 'prop-types'
import { Select } from 'antd'
import { get } from 'lodash'
import { LoadingOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedStore } from '@/redux/actions/App'

const { Option } = Select

const StoreItem = ({ stores: { data, ui } }) => {
    const dispatch = useDispatch()
    const selectedStore = useSelector((state) => get(state, 'selectedStore.data', null))
    const { stores = [] } = data

    if (ui.loading) {
        return <LoadingOutlined />
    }

    const handleSelect = (data) => {
        dispatch(setSelectedStore(data))
    }

    return (
        <div className="text-white">
            <Select placeholder="Seleccionar" loading={ui.loading} defaultValue={selectedStore} onSelect={handleSelect}>
                {stores.length > 0 &&
                    stores.map((store) => {
                        return (
                            <Option key={store.uuid} value={store.uuid}>
                                {store.name}
                            </Option>
                        )
                    })}
            </Select>
        </div>
    )
}

StoreItem.propTypes = {
    stores: PropTypes.object,
}

export default StoreItem
