import axiosClient from "./axiosClient";

export const getUserProductFavorites = () => {
    return axiosClient.get('/Users/Product/favorites', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
    });
}
export const signInApi = (user) => {
    return axiosClient.post('/Users/signin', user);
}

export const signUpApi = (user) => {
    return axiosClient.post('/Users/signup', user);
}