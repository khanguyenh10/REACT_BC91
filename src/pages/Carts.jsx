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
                            <thead>
                                <tr>
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
                                        <img src='/shoes/thumbnail.png' />
                                    </td>
                                    <td>100</td>
                                    <td>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="basic-addon1">-</span>
                                            </div>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder=""
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                            <div class="input-group-append">
                                                <span class="input-group-text" id="basic-addon1">+</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        1000
                                    </td>
                                    <td>
                                        <div className='d-flex gap-4'>
                                            <button className='btn btn-primary fw-medium'>Edit</button>
                                            <button className='btn btn-danger fw-medium'>Delete</button>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Carts