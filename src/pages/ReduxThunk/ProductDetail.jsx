import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailActionThunk } from '../../redux/reducer/ProductPageReducer';
const ProductDetail = () => {
    const params = useParams();
    // const [productDetail, setProductDetail] = useState({});
    const { productDetail } = useSelector(state => state.ProductPageReducer);
    const [rotate, setRotate] = useState('rotate(0deg)')
    const dispatch = useDispatch();
    //Gọi api dựa trên parametter
    const getProductDetailApi = async () => {
        // try {
        //     const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${params.id}`);
        //     //Sau khi lấy dữ liệu từ api về thì đưa vào state

        //     setProductDetail(res.data.content);
        // } catch (err) {
        //     console.log(err);
        // }
        dispatch(getProductDetailActionThunk(params.id))
    }

    useEffect(() => {
        getProductDetailApi();
    }, [params.id]) //TH2: có dependency -> khi dependency thay đổi thì gọi lại 


    return (
        <div className="container py-4">
            <h3>Detail: {params.id}</h3>
            <div className="row g-3">
                {/* LEFT: Product gallery */}
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body">
                            <div className="bg-white border rounded-4 p-4 d-flex justify-content-center align-items-center" style={{ minHeight: 360 }}>
                                {/* Main image */}
                                <img style={{ transform: rotate, maxHeight: 320 }} src={productDetail.image} className="img-fluid" alt="Product" />
                            </div>
                            {/* Thumbnails */}
                            <div className="d-flex gap-2 mt-3 flex-wrap">
                                {productDetail?.detaildetailedImages?.map((item, index) => {
                                    let className = 'border-default';
                                    if (item == rotate) {
                                        className = 'border-primary';
                                    }

                                    return <a key={index} className={`border ${className} rounded-3 p-2 bg-white`} href="#" aria-label="thumb 1" onClick={(e) => {
                                        setRotate(item);
                                    }}>
                                        <img style={{ transform: item }} width={50} height={50} className='object-fit-cover' src={productDetail.image} alt={1} />
                                    </a>
                                })}



                            </div>
                            <a href="#" className="d-block text-decoration-none mt-3 text-secondary">
                                Xem thêm Ưu điểm &amp; lưu ý của sản phẩm ›
                            </a>
                        </div>
                    </div>
                </div>
                {/* RIGHT: Product info */}
                <div className="col-12 col-lg-6">
                    {/* Title + badges + price */}
                    <div className="card shadow-sm border-0 rounded-4 mb-3">
                        <div className="card-body">
                            <div className="d-flex flex-wrap gap-2 mb-2">
                                <span className="badge text-bg-danger rounded-pill">TOP DEAL</span>
                                <span className="badge text-bg-primary rounded-pill">FREESHIP XTRA</span>
                                <span className="badge text-bg-warning rounded-pill">30 NGÀY ĐỔI TRẢ</span>
                                <span className="badge text-bg-light border text-dark rounded-pill">CHÍNH HÃNG</span>
                                <span className="ms-auto text-secondary">Thương hiệu: <b>Elmich</b></span>
                            </div>
                            <h5 className="fw-bold mb-2">
                                {productDetail.name}
                            </h5>
                            <div className="d-flex align-items-center gap-2 text-secondary mb-2">
                                <span className="fw-bold text-dark">5.0</span>
                                <span className="text-warning">★★★★★</span>
                                <span>(1)</span>
                                <span className="mx-1">|</span>
                                <span>Đã bán 8</span>
                            </div>
                            <div className="d-flex align-items-baseline gap-3">
                                <div className="fs-2 fw-bold text-danger">{productDetail.price} $</div>

                            </div>
                            <div className='text text-dark'>
                                {productDetail.description}

                            </div>
                        </div>
                    </div>
                    {/* Shipping */}
                    <div className="card shadow-sm border-0 rounded-4 mb-3">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <h6 className="fw-bold mb-0">Thông tin vận chuyển</h6>
                                <a href="#" className="ms-auto text-decoration-none">Đổi</a>
                            </div>
                            <div className="text-secondary mt-2">
                                Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh
                            </div>
                            <hr />
                            <div className="d-flex">
                                <div className="me-2 text-danger fw-bold">NOW</div>
                                <div className="flex-grow-1">
                                    <div className="fw-semibold">Giao siêu tốc 2h</div>
                                    <div className="text-secondary">
                                        Trước 10h ngày mai: <span className="fw-semibold text-dark">25.000đ</span>
                                        <del className="ms-1">95.000đ</del>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex">
                                <div className="me-2 text-primary fw-bold">☀</div>
                                <div className="flex-grow-1">
                                    <div className="fw-semibold">Giao đúng sáng mai</div>
                                    <div className="text-secondary">
                                        8h - 12h, 11/02:
                                        <span className="text-success fw-semibold">Miễn phí</span>
                                        <del className="ms-1">52.400đ</del>
                                    </div>
                                    <div className="text-secondary">Nếu đặt trong 13 phút nữa</div>
                                </div>
                            </div>
                            <hr />
                            <div className="text-primary fw-bold">FREESHIP XTRA</div>
                            <div className="text-secondary">
                                Freeship 15k đơn từ 45k, Freeship 30k đơn từ 100k
                            </div>
                        </div>
                    </div>
                    {/* Other offers */}
                    <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body">
                            <h6 className="fw-bold">Ưu đãi khác</h6>
                            <div className="d-flex align-items-center">
                                <div className="text-secondary">11 Mã Giảm Giá</div>
                                <div className="ms-auto d-flex gap-2">
                                    <span className="badge text-bg-light border text-primary">Giảm 6%</span>
                                    <span className="badge text-bg-light border text-primary">Giảm 5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Sản phẩm liên quan */}
                <div className='my-5'>
                    <h3>Sản phẩm tương tự</h3>
                    <div className='row'>
                        {productDetail?.relatedProducts?.map((item) => {
                            return <div className='col-md-3 mt-2' key={item.id}>
                                <div className='card'>
                                    <img src={item.image} alt='...' />
                                    <div className='card-body'>
                                        <h4 className='card-title'>{item.name}</h4>
                                        <p className='card-text'>{item.price}</p>
                                        <NavLink to={`/detail-thunk/${item.id}`} className='btn btn-dark'>Detail</NavLink>
                                    </div>
                                </div>
                            </div>
                        })}


                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail