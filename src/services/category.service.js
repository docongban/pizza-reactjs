import httpClient from '../API/http-common'

const getAll = () => {
    return httpClient.get('/categories')
}

const getProductByCategoryId = (id) => {
    return httpClient.get(`/category/${id}`)
}

export default { getAll, getProductByCategoryId }