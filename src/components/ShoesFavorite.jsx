import { useEffect, } from 'react'
import { Navigate, } from 'react-router-dom';
import useUserInfo from '@/hooks/useUserInfo';
import useRedux from '@/hooks/useRedux';
import { getProductFavoritesActionThunk } from '@/redux/reducer/userReducer';

const ShoesFavorite = () => {
    const { dispatch } = useRedux();
    const { isLogined, productsFavorite } = useUserInfo();
    useEffect(() => {
        dispatch(getProductFavoritesActionThunk());
    }, [])

    if (!isLogined) {
        return <Navigate to={'/login'} />
    }
    return (
        <div className='products'>
            <div className="row p-md-5 g-md-5">
                {
                    productsFavorite.map(product =>
                        <div className="col-md-6 col-lg-4" key={product.id}>
                            <div className="card product-item">
                                <div className="card-body  p-md-5 pb-md-2">
                                    <img src={product.image} className=" object-fit-contain mx-auto d-block" alt="..." width={200} height={200} />
                                    {/* <Link to={'/detail/1'}> */}
                                    <h5 className="card-title fw-light">{product.name}</h5>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ShoesFavorite