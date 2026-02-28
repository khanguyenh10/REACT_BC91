import React from 'react'
import { useSelector } from 'react-redux';
import SinhVien from './SinhVien';

const DanhSachSinhVien = (props) => {
    const svReducer = useSelector(state => state.svReducer);
    const { onSVDetail } = props;
    // console.log(svReducer)
    return (
        <div className='mt-2'>
            <div
                className="table-responsive"
            >
                <table
                    className="table "
                >
                    <thead className=" table-dark">
                        <tr>
                            <th scope="col">Mã SV</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Email</th>
                            <th scope="col"><em className="fa fa-cog"></em></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            svReducer.map((sv, index) => {
                                return <SinhVien key={index} sv={sv} onSVDetail={onSVDetail} />
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default DanhSachSinhVien