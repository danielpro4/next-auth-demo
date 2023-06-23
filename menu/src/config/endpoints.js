const SERVICE_URL = process.env.NEXT_PUBLIC_SERVICE_URL

const endpoints = {
    auth: {
        login: `${SERVICE_URL}/api/auth/token`,
    },
    products: {
        allProducts: `${SERVICE_URL}/api/v1/products`,
    },
    stores: {
        myStores: `${SERVICE_URL}/api/v1/users/me`,
    },
}

export default endpoints
