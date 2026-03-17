import React, { useEffect, useState } from 'react'
import Products from './Products';
import { getUserProductFavoritesApi } from '../api/userApi';
import { toastError } from '../util/toast';
import { useSelector } from 'react-redux';

const ShoesFavorite = () => {
    const userReducer = useSelector(rootState => rootState.userReducer);
    const { isLogined, accessToken } = userReducer;
    const [productsFavorite, setProductsFavorite] = useState([]);
    useEffect(() => {
        if (accessToken) {
            const getProfile = async () => {
                try {
                    let response = await getUserProductFavoritesApi();
                    setProductsFavorite(response.data.content.productsFavorite);
                } catch (error) {
                    toastError(error);
                }

            }
            getProfile();
        }
    }, [accessToken])

    //kiểm tra đã đăng nhập chưa
    useEffect(() => {
        if (!isLogined) {
            navigate('/login');
        }
    }, [isLogined]);
    return (
        <div>
            <Products products={productsFavorite} />
        </div>
    )
}

export default ShoesFavorite