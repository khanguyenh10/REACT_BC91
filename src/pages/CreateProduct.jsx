import React from 'react'


//Bước 1: tạo giao diện html cho component để người dùng có chỗ input data vào như API
//Bước 2: Gọi api thêm tương ứng


const CreateProduct = () => {
    return (
        <form className="container mt-4 ">
            <div className="card-header fw-bold my-2">
                Product Information
            </div>
            <div className="card shadow-sm ">


                <div className="card-body">
                    <form>
                        {/* ID */}
                        <div className="mb-3">
                            <label className="form-label">ID</label>
                            <input
                                type="number"
                                className="form-control"
                                name="id"
                                placeholder="Enter product ID"
                            />
                        </div>

                        {/* Name */}
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter product name"
                            />
                        </div>

                        {/* Price */}
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                placeholder="Enter price"
                            />
                        </div>

                        {/* Quantity */}
                        <div className="mb-3">
                            <label className="form-label">Quantity</label>
                            <input
                                type="number"
                                className="form-control"
                                name="quantity"
                                placeholder="Enter quantity"
                            />
                        </div>

                        {/* Short Description */}
                        <div className="mb-3">
                            <label className="form-label">Short Description</label>
                            <input
                                type="text"
                                className="form-control"
                                name="shortDescription"
                                placeholder="Short description"
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                name="description"
                                rows="3"
                                placeholder="Full description"
                            />
                        </div>

                        {/* Image Link */}
                        <div className="mb-3">
                            <label className="form-label">Image Link</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imgLink"
                                placeholder="Image URL"
                            />
                        </div>

                        {/* Submit */}
                        <button type="submit" className="btn btn-primary w-100">
                            Save Product
                        </button>
                    </form>
                </div>
            </div>
        </form>
    )
}

export default CreateProduct