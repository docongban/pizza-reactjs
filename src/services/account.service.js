import httpClient from '../API/http-common'

const create = (data) => {
    return httpClient.post("/register", data)
}

const login = (data) => {
    return httpClient.post("/login",data)
}

const getAllPhone = () => {
    return httpClient.get("/phone")
}

export default { create, login, getAllPhone }