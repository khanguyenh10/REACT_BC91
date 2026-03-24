import React, { useEffect } from 'react'
import { HeartEmptyIcon, HeartIcon } from './icons/main';
import RequestHandler from './RequestHandler';
import useRedux from '../hooks/useRedux';
import { getLikeApi, getUnLikeApi } from '../api/userApi';
import Loading from './ui/Loading';
import usePostData from '../hooks/usePostData';
import { toastError } from '../util/toast';
import { toggleProductFavorite } from '../redux/reducer/userReducer';
import useUserInfo from '@/hooks/useUserInfo';

const ShoeFavoriteIcon = ({ productId, productName, productImage }) => {
    const { dispatch } = useRedux();
    const { productsFavorite, isLogined } = useUserInfo();
    const isLiked = productsFavorite.some(product => product.id === productId); // kiểm tra sản phẩm đã được yêu thích hay chưa
    const { mutate: postLike, isLoading, error } = usePostData(getLikeApi);
    const { mutate: postUnLike, isLoadingUnLike, errorUnLike } = usePostData(getUnLikeApi);
    useEffect(() => {
        if (error || errorUnLike) toastError(error);
    }, [error, errorUnLike])

    const handeLikes = () => {
        if (!isLogined) {
            toastError({ message: 'Vui lòng đăng nhập để sử dụng tính năng này' });
            return;
        }
        if (isLiked) {
            postUnLike(productId)
        } else {
            postLike(productId)
        }
        dispatch(toggleProductFavorite({
            id: productId,
            name: productName,
            image: productImage
        }));
    }
    return (
        <div className='hearts text-end'>
            {isLiked ? <button className=' border-0 bg-transparent' onClick={handeLikes} disabled={isLoadingUnLike}> <HeartIcon /> </button> :
                <button className=' border-0 bg-transparent' onClick={handeLikes} disabled={isLoading} > <HeartEmptyIcon /> </button>}
        </div>
    )
}

export default ShoeFavoriteIcon