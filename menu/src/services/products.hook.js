import * as R from 'ramda'
import axios from 'axios'
import { useQuery } from 'react-query'
import { stringify } from 'query-string'
import endpoints from '@/config/endpoints'

export const processResults = (results) => {
    const fn = R.groupBy((product) => {
        return product.category.name
    })

    return fn(results)
}

export const fetchProducts = async (access, storeId) => {
    const endpoint = endpoints.products.allProducts
    return axios
        .get(endpoint, {
            headers: {
                Authorization: `Bearer ${access}`,
            },
            params: { store: storeId },
            paramsSerializer: (params) => stringify(params, { arrayFormat: 'none' }),
        })
        .then(({ data }) => {
            return processResults(data.results)
        })
}

export const useFetchProducts = ({ access, storeId }) => {
    return useQuery(['products', storeId], () => fetchProducts(access, storeId))
}
