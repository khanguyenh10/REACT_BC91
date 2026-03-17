import React, { useEffect } from 'react'
import { HeartEmptyIcon, HeartIcon } from './icons/main';
import RequestHandler from './RequestHandler';
import useRedux from '../hooks/useRedux';
import { getLikeApi, getUnLikeApi } from '../api/userApi';
import Loading from './ui/Loading';
import usePostData from '../hooks/usePostData';
import { toastError } from '../util/toast';
import { toggleProductFavorite } from '../redux/reducer/userReducer';

const ShoeFavoriteIcon = ({ productId, productName, productImage }) => {
    const { useAppSelector, dispatch } = useRedux();
    const { productsFavorite } = useAppSelector(state => state.userReducer);
    const isLiked = productsFavorite?.find(product => product.id === productId) ? true : false;
    const { mutate: postLike, isLoading, error } = usePostData(getLikeApi);
    const { mutate: postUnLike, isLoadingUnLike, errorUnLike } = usePostData(getUnLikeApi);
    useEffect(() => {
        if (error || errorUnLike) toastError(error);
    }, [error, errorUnLike])

    const handeLikes = () => {
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