import axios from 'axios';
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'


//Quản lý tất cả sản phẩm của giao diện home (cùng api với home)
const ProductManagement = () => {
    const [arrProduct, setArrProduct] = React.useState([]);

    //Call api product get all
    const getAllProductApi = async () => {
        try {

            const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product`);

            setArrProduct(res.data.content);
            console.log(res.data.content)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllProductApi();

    }, []);
    return (
        <div className='container' style={{ height: 500, overflow: 'auto' }}>
            <h3> Product Management</h3>
            <NavLink to="/admin/products/addNew" className="btn btn-success" >Add new product</NavLink>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {arrProduct.map((prod, index) => {
                        return (
                            <tr key={index}>
                                <td>{prod.id}</td>
                                <td><img src={prod.image} width={50} /></td>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                                <td>
                                    <NavLink to={`/admin/products/edit/${prod.id}`} className="btn btn-warning mx-2" >Edit</NavLink>
                                    <button className='btn btn-danger' onClick={async (e) => {
                                        try {
                                            const kq = window.confirm('Bạn có muốn xoá không ?');
                                            if (kq) {
                                                const res = axios.delete(`https://apistore.cybersoft.edu.vn/api/Product/${item.id}`);
                                                alert('xoá thành công!');
                                                getAllProductApi();
                                            }
                                        } catch (err) {
                                            alert('xoá thất bại');
                                            console.log(err);
                                        }
                                    }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductManagement