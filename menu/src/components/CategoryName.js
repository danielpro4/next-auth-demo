import { Tag } from 'antd'
import PropTypes from 'prop-types'

const CategoryName = ({ name, count = 0 }) => {
    return (
        <div className="flex gap-3">
            <div className="font-medium text-gray-600">{name}</div>
            <Tag color="volcano" className="rounded">
                {count}
            </Tag>
        </div>
    )
}

CategoryName.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number,
}

export default CategoryName
