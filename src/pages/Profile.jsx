import React from 'react'
import HeadingTitle from '../components/HeadingTitle'
import FormItem from '../components/FormItem'
import Line from '../components/Line'

const Profile = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <HeadingTitle title={'Profile'} />
                </div>
                <form action="" className='mt-5'>
                    <div className="row">
                        <div className="col-md-2">
                            <img src="/shoes/avatar.png" alt="" />
                        </div>
                        <div className="col-md-10">
                            <div className="row ">
                                <div className="col-md-6  mb-4">
                                    <FormItem label='Email' type='email' name="email" placeholder='email' />
                                </div>
                                <div className="col-md-6  mb-4">
                                    <FormItem label='Name' type='text' name="name" placeholder='name' />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <FormItem label='Phone' type='tel' name="phone" placeholder='phone' />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <FormItem datatype='password' label='Password' type='password' name="password" placeholder='password' />
                                    <div className="row mt-4">
                                        <div className="col-md-8">
                                            <div className='d-flex gap-4'>
                                                <label className="form-label">Gender</label>
                                                <div className="form-check d-flex flex-column">
                                                    <input className="form-check-input" type="radio" name="gender" id="Male" />
                                                    <label className="form-check-label" htmlFor="Male" style={{ fontWeight: 400, marginLeft: '-3rem', marginTop: '1rem' }}>
                                                        Male
                                                    </label>
                                                </div>
                                                <div className="form-check d-flex flex-column">
                                                    <input className="form-check-input" type="radio" name="gender" id="Female" defaultChecked />
                                                    <label className="form-check-label" htmlFor="Female" style={{ fontWeight: 400, marginLeft: '-3rem', marginTop: '1rem' }}>
                                                        Female
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <button type='submit' className='shadow'>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
            <Line />
            <div>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Order history</button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Favourite</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <ul>
                            <li className='mb-5'>
                                <h3 className='order-date mt-5'>
                                    + Orders have been placed on 09 - 19 - 2020
                                </h3>
                                <div
                                    class="table-responsive"
                                >
                                    <table
                                        class="table "
                                    >
                                        <thead className=' '>
                                            <tr className=''>
                                                <th scope="col">id</th>
                                                <th scope="col">img</th>
                                                <th scope="col">name</th>
                                                <th scope="col">price</th>
                                                <th scope="col">quantity</th>
                                                <th scope="col">total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="">
                                                <td>1</td>
                                                <td>
                                                    <img src='/shoes/thumbnail.png' width={85} />
                                                </td>
                                                <td>Product 1</td>
                                                <td>1000</td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        class=" text-center bg-secondary mx-3 "
                                                        style={{ width: 100, lineHeight: 1 }}
                                                        placeholder=""
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                        min={1}
                                                        value={1}
                                                        readOnly
                                                    />
                                                </td>
                                                <td>
                                                    1000
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </li>
                            <li>
                                <h3 className='order-date mt-5'>
                                    + Orders have been placed on 09 - 19 - 2020
                                </h3>
                                <div
                                    class="table-responsive"
                                >
                                    <table
                                        class="table "
                                    >
                                        <thead className=' '>
                                            <tr className=''>
                                                <th scope="col">id</th>
                                                <th scope="col">img</th>
                                                <th scope="col">name</th>
                                                <th scope="col">price</th>
                                                <th scope="col">quantity</th>
                                                <th scope="col">total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="">
                                                <td>1</td>
                                                <td>
                                                    <img src='/shoes/thumbnail.png' width={85} />
                                                </td>
                                                <td>Product 1</td>
                                                <td>1000</td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        class=" text-center bg-secondary mx-3 "
                                                        style={{ width: 100, lineHeight: 1 }}
                                                        placeholder=""
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                        min={1}
                                                        value={1}
                                                        readOnly
                                                    />
                                                </td>
                                                <td>
                                                    1000
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                    </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                </div>
            </div>

        </div>
    )
}

export default Profile