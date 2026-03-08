export const getUserProductFavorites = () => {
    return axiosClient.get('/Users/Product/favorites', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
    });
}