import React from 'react'
import { useDispatch } from 'react-redux'
import { xoaSV } from '../redux/reducer/svReducer';

const SinhVien = (props) => {
    const { onSVDetail } = props;
    const { maSV, hoTenSV, soDT, email } = props.sv
    const dispatch = useDispatch();

    const handleXoaSV = () => {
        if (confirm('Bạn có muốn xóa sv này ko ?')) {
            const action = xoaSV(maSV);
            dispatch(action);
        }
    }
    return (
        <tr className="">
            <td >{maSV}</td>
            <td>{hoTenSV}</td>
            <td>{soDT}</td>
            <td>{email}</td>
            <td>
                <button className='btn btn-warning me-2' onClick={() => onSVDetail(props.sv)}>
                    <em className="fa fa-edit"></em>
                </button>
                <button className='btn btn-danger me-2' onClick={handleXoaSV}>
                    <em className="fa fa-trash" ></em>
                </button>
            </td>
        </tr>
    )
}

export default SinhVien