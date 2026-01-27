import React from 'react'

const ModalShoe = (props) => {
    //bs5-modal-default -> quét khối -> convert html to jsx
    const { stateModal } = props;
    return (
        <div>
            {/* Modal trigger button */}
            {/* <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
                Launch
            </button> */}
            {/* Modal Body */}
            {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
            <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">
                                Thông tin sản phẩm {stateModal.name}
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <h3 className='my-3 text-center'>Thông tin sản phẩm</h3>
                            <img src={stateModal.image} alt='...' width={200} className='d-block mx-auto' />
                            <div
                                class="table-responsive"
                            >
                                <table
                                    class="table table-primary"
                                >
                                    <tbody>
                                        <tr class="">
                                            <td style={{ width: 300 }}><b>Tên sản phẩm</b></td>
                                            <td>{stateModal.name}</td>

                                        </tr>
                                        <tr class="">
                                            <td><b>Giá</b></td>
                                            <td>{stateModal.price}$</td>
                                        </tr>
                                        <tr class="">
                                            <td><b>Số lượng</b></td>
                                            <td>{stateModal.quantity}</td>
                                        </tr>
                                        <tr class="">
                                            <td><b>Mô tả</b></td>
                                            <td>{stateModal.description}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Optional: Place to the bottom of scripts */}
        </div>


    )
}

export default ModalShoe