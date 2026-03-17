import axiosClient from "./axiosClient"

export const getProductApi = (keyword) => {
    if (keyword) return axiosClient.get(`/Product?keyword=${keyword}`);
    return axiosClient.get('/Product');
}
export const getProductByIdApi = (id) => {
    return axiosClient.get(`/Product/getbyid?id=${id}`);
}