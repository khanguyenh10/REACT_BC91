import React, { useEffect, useState } from 'react'
import Products from './Products';
import { toastError } from '../util/toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProductFavoritesApi } from '../api/userApi';

const ShoesFavorite = () => {
    const userReducer = useSelector(rootState => rootState.userReducer);
    const { isLogined, accessToken } = userReducer;
    const [productsFavorite, setProductsFavorite] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (accessToken) {
            const getUserProductFavorites = async () => {
                try {
                    let response = await getProductFavoritesApi();
                    setProductsFavorite(response.data.content.productsFavorite);
                } catch (error) {
                    toastError(error);
                }

            }
            getUserProductFavorites();
        }
    }, [accessToken])

    //kiểm tra đã đăng nhập chưa
    useEffect(() => {
        if (!isLogined) {
            navigate('/login');
        }
    }, [isLogined]);
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