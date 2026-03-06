import React from 'react'

const Carts = () => {
    return (
        <div className='cart-page'>
            <div className="container">
                <h1 className=' fs-4 mb-5'>Cart</h1>
                <hr className=' bg-secondary border-0' style={{ height: 2 }} />
                <div className='my-5'>
                    <div
                        class="table-responsive"
                    >
                        <table
                            class="table "
                        >
                            <thead className=' '>
                                <tr className=''>
                                    <th scope="col">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
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
                                <tr class="">
                                    <td >
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                            />
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>
                                        <img src='/shoes/thumbnail.png' width={85} />
                                    </td>
                                    <td>Product 1</td>
                                    <td>1000</td>
                                    <td>
                                        <div class="input-group mb-3 justify-content-center flex-nowrap">
                                            <div class="input-group-prepend">
                                                <span class="btn btn-primary input-group-text px-3" id="basic-addon1">+</span>
                                            </div>
                                            <input
                                                type="number"
                                                class=" text-center bg-secondary mx-3 "
                                                style={{ width: 100, lineHeight: 1 }}
                                                placeholder=""
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                min={1}
                                                value={1}
                                            />
                                            <div class="input-group-append">
                                                <span class="btn btn-primary  input-group-text px-3" id="basic-addon1">-</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        1000
                                    </td>
                                    <td>
                                        <div className='d-flex gap-4 justify-content-center'>
                                            <button className='btn btn-primary fw-medium  fs-md px-4  text-uppercase shadow'>Edit</button>
                                            <button className='btn btn-danger fw-medium fs-md px-4 text-uppercase shadow'>Delete</button>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className=' text-end me-md-5'>
                        <button className=' btn btn-warning fs-md fw-medium text-white text-uppercase shadow me-md-5'> Submit order </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carts