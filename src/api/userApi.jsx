import axiosClient from "./axiosClient";

export const getUserProductFavoritesApi = () => {
    return axiosClient.get('/Users/getproductfavorite', {
        // headers: {
        //     'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userInfo')).accessToken
        // }
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