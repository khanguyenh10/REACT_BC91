import axiosClient from "./axiosClient"

export const getProductApi = () => {
    return axiosClient.get('/Product');
}
export const getProductByIdApi = (id) => {
    return axiosClient.get(`/Product/getbyid?id=${id}`);
}