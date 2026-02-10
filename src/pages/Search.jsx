import axios from 'axios';
import React, { useEffect } from 'react'
import { NavLink, useParams, useSearchParams } from 'react-router-dom'

//2 nghiệp vụ
// 1: đưa giá trị người dùng nhập lên url
// 2: lấy tham số từ url xuống gọi api để setState (kết quả tìm kiếm)

const Search = () => {
    const [arrProduct, setArrProduct] = React.useState([]
    );
    const [searchParam, setSearchParam] = useSearchParams(); //Dùng useSearchParams để đưa giá trị người dùng lên url
    const k = searchParam.get('k');
    const getProductByKeyword = async () => {
        const keyword = searchParam.get('k');
        if (keyword) {
            // gọi api với keyword
            try {
                let res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`);
                setArrProduct(res.data.content);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        getProductByKeyword();
    }
    const handleChangeInput = (e) => {
        setSearchParam({ k: e.target.value })
    }
    useEffect(() => {
        //gọi api khi k thay đổi và lần đầu load xong
        getProductByKeyword();
    }, [])
    return (
        <div className='container'>
            <form className='mt-5' onSubmit={handleSubmit}>
                <h3>Tìm kiếm sản phẩm</h3>
                <div className='input-group'>
                    <input className='form-control' name="keyword" id="keyword" onInput={handleChangeInput} />
                    <button className='btn-group btn btn-dark'>Search</button>

                </div>
            </form>
            <div className='search-result my-3'>
                <h3>Kết quả tìm kiếm</h3>
                <div className='row'>
                    {arrProduct.map((item, index) => {
                        return <div className='col-md-3 mt-2' key={index}>
                            <div className='card'>
                                <img src={item.image} alt='...' />
                                <div className='card-body'>
                                    <h3 className='card-title'>{item.name}</h3>
                                    <p className='card-text'>{item.price}</p>
                                    <NavLink to={`/detail/${item.id}`} className={'btn btn-dark'} >Detail</NavLink>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}

export default Search