import httpClient from '../API/http-common'

const getAll = () => {
    return httpClient.get('/products')
}

const searchProduct = (text) => {
    return httpClient.get(`/search/${text}`)
}

export default { getAll, searchProduct }