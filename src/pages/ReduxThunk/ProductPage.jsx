import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductApiActionThunk } from "../../redux/reducer/ProductPageReducer";
const ProductPage = () => {
    //   const [arrProduct, setArrayProduct] = useState([]);
    const { arrProduct } = useSelector((state) => state.ProductPageReducer);
    const dispatch = useDispatch();
    const getAllProductApi = async () => {
        // try {
        //     const res = await axios.get(
        //         `https://apistore.cybersoft.edu.vn/api/Product`,
        //     );

        //     setArrayProduct(res.data.content);
        //     console.log(res.data.content);
        // } catch (err) {
        //     console.log(err);
        // }
        const action = getAllProductApiActionThunk();
        dispatch(action);
    };

    useEffect(() => {
        //Cài đặt hàm khi component khởi tạo xong html thì thực thi
        getAllProductApi();
    }, []); //dependency : tham số phụ thuộc

    return (
        <div className="container">
            <h3>Get all product page</h3>
            <div className="row">
                {arrProduct.map((item) => {
                    return (
                        <div className="col-md-4 mt-2" key={item.id}>
                            <div className="card">
                                <img src={item.image} alt="..." />
                                <div className="card-body">
                                    <h3>{item.name}</h3>
                                    <p>{item.price}</p>
                                    <NavLink
                                        to={`/detail-thunk/${item.id}`}
                                        className="btn btn-success"
                                    >
                                        Detail
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductPage;
