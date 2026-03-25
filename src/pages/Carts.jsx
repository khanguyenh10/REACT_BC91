import React, { use, useEffect } from 'react'
import useRedux from '../hooks/useRedux'
import { Navigate, useNavigate } from 'react-router-dom';
import { addToCart, removeToCart, resetCart, updateToCart } from '../redux/reducer/cartReducer';
import usePostData from '../hooks/usePostData';
import { postOrder } from '../api/userApi';
import { toastError, toastSuccess } from '../util/toast';
import useUserInfo from '@/hooks/useUserInfo';

const Carts = () => {
    const { useAppSelector, dispatch } = useRedux();
    const cartReducer = useAppSelector(rootState => rootState.cartReducer);
    const { mutate, isLoading, error, data } = usePostData(postOrder) // sử dụng hook usePostData để gửi dữ liệu đặt hàng lên server
    const { isLogined, userLogin } = useUserInfo();
    const navigate = useNavigate();
    const [selectedProducts, setSelectedProducts] = React.useState([]);

    const handleChangeQuantity = (productId, quantity) => {
        if (quantity < 1) return;
        const action = updateToCart({ id: productId, quantity });
        dispatch(action);
    }
    const handleRemoveFromCart = (productId) => {
        const action = removeToCart(productId);
        dispatch(action);
    }
    const handleSubmitOrder = () => {
        if (selectedProducts.length == 0) {
            toastError({ message: 'Vui lòng chọn sản phẩm để đặt hàng' });
            return;
        }
        mutate({
            orderDetails: selectedProducts,
            email: userLogin,
        })
    }
    const handleSelectProduct = (productId, checked) => {
        if (productId === 'all') {
            // Handle select all products
            if (checked) {
                setSelectedProducts(cartReducer.cart.map(item => ({ productId: item.id, quantity: item.quantity })));
            } else {
                setSelectedProducts([]);
            }
        } else {
            // Handle select individual product
            if (checked) {
                setSelectedProducts(prev => [...prev, { productId, quantity: cartReducer.cart.find(item => item.id === productId)?.quantity || 1 }]);
            } else {
                setSelectedProducts(prev => prev.filter(item => item.productId !== productId));
            }
        }
    }
    useEffect(() => {
        if (data) {
            toastSuccess('Đặt hàng thành công');
            // dispatch(resetCart(selectedProducts));
            // navigate('/profile');
        }
        if (error) {
            toastError(error);
        }
    }, [data, error, selectedProducts]);


    if (!isLogined) {
        return <Navigate to={'/login'} />;
    }
    return (
        <div className='cart-page'>
            <div className="container">
                <h1 className=' fs-4 mb-5'>Cart</h1>
                <hr className=' bg-secondary border-0' style={{ height: 2 }} />
                <div className='my-5'>
                    <div
                        className="table-responsive"
                    >
                        <table
                            className="table "
                        >
                            <thead className=' '>
                                <tr className=''>
                                    <th scope="col">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="all"
                                                id="flexCheckDefault"
                                                onChange={(e) => handleSelectProduct('all', e.target.checked)}
                                            />
                                        </div>
                                    </th>
                                    <th scope="col">id</th>
                                    <th scope="col">img</th>
                                    <th scope="col">name</th>
                                    <th scope="col">price</th>
                                    <th scope="col">quantity</th>
                                    <th scope="col">total</th>
                                    <th scope="col">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartReducer.cart.map((item, index) => {
                                    return (
                                        <tr className="" key={index}>
                                            <td >
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value={item.id}
                                                        id={`flexCheckDefault-${item.id}`}
                                                        checked={selectedProducts.some(product => product.productId === item.id)}
                                                        onChange={(e) => handleSelectProduct(item.id, e.target.checked)}
                                                    />
                                                </div>
                                            </td>
                                            <td>{index + 1}</td>
                                            <td>
                                                <img src={item.image} width={85} />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <div className="input-group mb-3 justify-content-center flex-nowrap">
                                                    <div className="input-group-prepend">
                                                        <span className="btn btn-primary input-group-text px-3" id="basic-addon1" onClick={() => handleChangeQuantity(item.id, item.quantity + 1)}>+</span>
                                                    </div>
                                                    <input
                                                        type="number"
                                                        className=" text-center bg-secondary mx-3 "
                                                        style={{ width: 100, lineHeight: 1 }}
                                                        placeholder=""
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                        min={1}
                                                        value={item.quantity}
                                                        onChange={(e) => handleChangeQuantity(item.id, parseInt(e.target.value))}
                                                    />
                                                    <div className="input-group-append">
                                                        <span className="btn btn-primary  input-group-text px-3" id="basic-addon1" onClick={() => handleChangeQuantity(item.id, Math.max(1, item.quantity - 1))}>-
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.price * item.quantity}
                                            </td>
                                            <td>
                                                <div className='d-flex gap-4 justify-content-center'>
                                                    {/* <button className='btn btn-primary fw-medium  fs-md px-4  text-uppercase shadow'>Edit</button> */}
                                                    <button className='btn btn-danger fw-medium fs-md px-4 text-uppercase shadow' onClick={() => handleRemoveFromCart(item.id)}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className=' text-end me-md-5'>
                        <button className=' btn btn-warning fs-md fw-medium text-white text-uppercase shadow me-md-5' disabled={cartReducer.cart.length === 0 || isLoading} onClick={handleSubmitOrder}> Submit order </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carts