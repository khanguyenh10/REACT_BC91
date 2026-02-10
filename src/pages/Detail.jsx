import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

const Detail = () => {
    const params = useParams();
    const [productDetail, setProductDetail] = useState({
        "id": 3,
        "name": "converse chuck taylor",
        "alias": "converse-chuck-taylor",
        "price": 250,
        "feature": false,
        "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
        "size": [
            "32",
            "33",
            "34",
            "35"
        ],
        "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "quantity": 200,
        "detaildetailedImages": [
            "rotate(0deg)",
            "rotateY(180deg)",
            "rotate(45deg)",
            "rotate(-45deg)"
        ],
        "image": "http://apistore.cybersoft.edu.vn/images/converse-chuck-taylor.png",
        "imgLink": "converse-chuck-taylor.png",
        "categories": [
            {
                "id": "VANS_CONVERSE",
                "category": "VANS_CONVERSE"
            }
        ],
        "relatedProducts": [
            {
                "id": 2,
                "name": "vans old school",
                "alias": "vans-old-school",
                "feature": false,
                "price": 200,
                "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
                "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "image": "http://apistore.cybersoft.edu.vn/images/van-old-school.png",
                "imgLink": null
            },
            {
                "id": 3,
                "name": "converse chuck taylor",
                "alias": "converse-chuck-taylor",
                "feature": false,
                "price": 250,
                "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
                "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "image": "http://apistore.cybersoft.edu.vn/images/converse-chuck-taylor.png",
                "imgLink": null
            },
            {
                "id": 1,
                "name": "vans black",
                "alias": "vans-black-black",
                "feature": false,
                "price": 200,
                "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
                "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "image": "http://apistore.cybersoft.edu.vn/images/vans-black-black.png",
                "imgLink": null
            }
        ]
    })
    const [rotateProductImage, setRotateProductImage] = useState('rotate(0deg)');
    const topRef = useRef(null);
    //Gọi api dựa trên parametter
    const getProductDetailPage = async () => {
        try {
            const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${params.id}`);

            //Sau khi lấy dữ liệu từ api về đưa vào state
            setProductDetail(res.data.content);
        } catch (error) {
            console.log(error);
        }
    }


    const handleRotateProductImage = (rotate) => {
        setRotateProductImage(rotate);
    }

    useEffect(() => {
        getProductDetailPage();
        topRef.current.scrollIntoView({
            behavior: "instant",
        });
    }, [params.id]); // TH2 có dependency -> khi dependency thay đổi thì gọi lại
    return (
        <div className="container py-4" key={params.id} ref={topRef}>
            <h3>Detail : {params.id}</h3>
            <div className="row g-3">
                {/* LEFT: Product gallery */}
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-body">
                            <div className="bg-white border rounded-4 p-4 d-flex justify-content-center align-items-center" style={{ minHeight: 360 }}>
                                {/* Main image */}
                                <img src={productDetail.image} className="img-fluid" alt="Product" style={{ maxHeight: 320, transform: rotateProductImage }} />
                            </div>
                            {/* Thumbnails */}
                            <div className="d-flex gap-2 mt-3 flex-wrap">
                                {
                                    productDetail.detaildetailedImages?.map((item, index) => {
                                        return (
                                            <a className={`border rounded-3 p-2 bg-white ${item == rotateProductImage ? 'border-primary' : ''}`} onClick={() => handleRotateProductImage(item)} href="#" aria-label={`thumb ${index + 1}`} key={index}>
                                                <img style={{ transform: item }} src={productDetail.image} width={50} height={50} className='object-fit-cover' alt={index + 1} />
                                            </a>
                                        )
                                    })
                                }

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
                        {
                            productDetail.relatedProducts.map(prod => (
                                <div className='col-md-4 mt-2' key={prod.id}>
                                    <div className='card'>
                                        <img src={prod.image} alt='...' />
                                        <div className='card-body'>
                                            <h2 className='card-title'>{prod.name}</h2>
                                            <p className='card-text'>{prod.price}</p>
                                            <NavLink to={`/detail/${prod.id}`} className='btn btn-dark'>Detail</NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail