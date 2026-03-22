import axiosClient from "./axiosClient";

export const getProductFavoritesApi = () => {
    return axiosClient.get('/Users/getproductfavorite', {
        // headers: {
        //     'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userInfo')).accessToken
        // }
    });
}
export const getLikeApi = (productId) => {
    return axiosClient.get(`/Users/like?productId=${productId}`, {
    });
}
export const getUnLikeApi = (productId) => {
    return axiosClient.get(`/Users/unlike?productId=${productId}`, {
    });
}
export const getProfileApi = () => {
    return axiosClient.post('/Users/getProfile');
}

export const updateProfileApi = (data) => {
    return axiosClient.post('/Users/updateProfile', data);
}
export const signInApi = (user) => {
    return axiosClient.post('/Users/signin', user);
}

export const signUpApi = (user) => {
    return axiosClient.post('/Users/signup', user);
}
export const changePasswordApi = (data) => {
    return axiosClient.post('/Users/changePassword', data);
}
export const postOrder = (data) => {
    return axiosClient.post('/Users/order', data);
}