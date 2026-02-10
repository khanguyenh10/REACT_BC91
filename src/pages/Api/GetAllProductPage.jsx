//rafce
import axios from 'axios';
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const GetAllProductPage = () => {
    const [arrProduct, setArrProduct] = React.useState([
        {
            "sizes": [
                32,
                33,
                34,
                35
            ],
            "id": 2,
            "name": "vans old school",
            "alias": "vans-old-school",
            "price": 200,
            "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
            "size": "[32,33,34,35]",
            "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "quantity": 200,
            "deleted": false,
            "categories": "[{\"id\": \"VANS_CONVERSE\",\"category\":\"VANS_CONVERSE\"}]",
            "relatedProducts": "[3,2,1]",
            "feature": true,
            "image": "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
            "imgLink": "https://apistore.cybersoft.edu.vn/images/van-old-school.png"
        },
    ]);

    const getAllProductApi = async () => {
        try {
            let res = await axios.get('https://apistore.cybersoft.edu.vn/api/Product');
            console.log(res.data);
            let { content } = res.data;
            setArrProduct(content);
        } catch (error) {

        }
    }
    //useEffect dùng để làm gì ? Cho mấy trường hợp
    //dependency mảng rỗng: chạy 1 lần duy nhất khi component khởi tạo xong html => tương tự window onload (  thường dùng cho api get all)

    useEffect(() => {
        //Cài đặt hàm khi component khởi tạo xong html thì thực thi
        getAllProductApi();
    }, []); // dependency: tham số phụ thuộc
    return (
        <div className='container'>
            {/* <button className='btn btn-success' onClick={getAllProductApi}>Load api</button> */}
            <h3>Get all product page</h3>
            <div className='row'>
                {arrProduct.map((product, index) => {
                    return <div className='col-4 mb-2' key={product.id}>
                        <div className='card'>
                            <img src={product.image} alt='...' />
                            <div className='card-body'>
                                <h3 className='card-title'>{product.name}</h3>
                                <p className='card-text'>{product.price}</p>
                                <NavLink to={`detail/${product.id}`} className='btn btn-success'>Add to cart</NavLink >
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default GetAllProductPage