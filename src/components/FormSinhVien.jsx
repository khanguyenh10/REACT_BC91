import { useFormik } from 'formik'
import React, { use, useState } from 'react'
import * as Yup from 'yup'
import { addSV, updateSV } from '../redux/reducer/svReducer';
import { useDispatch, useSelector } from 'react-redux';
import DanhSachSinhVien from './DanhSachSinhVien';
const FormSinhVien = () => {
    const svReducer = useSelector(state => state.svReducer);
    const dispatch = useDispatch();
    const [errMaSV, setErrorMaSV] = useState();
    const [isEditSV, setIsEditSV] = useState(false); // nếu isEditSV = false là add SV và ngược lại sửa SV
    const svForm = useFormik({
        initialValues: {
            maSV: '',
            hoTenSV: '',
            soDT: '',
            email: ''
        },
        validationSchema: Yup.object({
            maSV: Yup.string().required('Mã SV ko được để trống'),
            hoTenSV: Yup.string().required('Tên SV ko được để trống'),
            soDT: Yup.string().required('Số diện thoại ko được để trống').matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số diện thoại không hợp lệ'),
            email: Yup.string().required('Email không được sé trống').email('Email không hợp lệ')
        }),
        onSubmit: (values) => {
            //thêm SV
            let action = '';
            if (!isEditSV) {
                console.log('thêm SV')
                // kiểm tra xem sv có mã số đã tồn tại chưa
                let existingSV = svReducer.find(sv => sv.maSV == values.maSV);
                if (existingSV) {
                    setErrorMaSV('Mã Sinh viên đã tồn tại');
                    return;
                }
                setErrorMaSV('');
                action = addSV(values);
            } else {
                //sửa SV
                console.log('sửa SV', values)
                action = updateSV(values);
                setIsEditSV(false);

            }
            dispatch(action);
            svForm.resetForm();

        }
    })
    const getSinhVienDetail = (svDetail) => {
        setIsEditSV(true);
        console.log(svDetail);
        svForm.setValues(svDetail);
    }
    return (
        <>
            <div className="card text-start">
                <div className="card-header bg-dark text-white">
                    <h3>Thông tin sinh vien</h3>
                </div>
                <div className="card-body">
                    <form action="" onSubmit={svForm.handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="">Mã SV</label>
                                <input type="text" className="form-control" name='maSV' value={svForm.values.maSV} onChange={svForm.handleChange} onBlur={svForm.handleBlur} disabled={isEditSV} />
                                <p className='text-danger'>{svForm.errors.maSV}</p>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="">Họ Tên</label>
                                <input type="text" className="form-control" name='hoTenSV' value={svForm.values.hoTenSV} onChange={svForm.handleChange} onBlur={svForm.handleBlur} />
                                <p className='text-danger'>{svForm.errors.hoTenSV}</p>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="">Só điện thoại</label>
                                <input type="text" className="form-control" name='soDT' value={svForm.values.soDT} onChange={svForm.handleChange} onBlur={svForm.handleBlur} />
                                <p className='text-danger'>{svForm.errors.soDT}</p>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="">Email</label>
                                <input type="text" className="form-control" name='email' value={svForm.values.email} onChange={svForm.handleChange} onBlur={svForm.handleBlur} />
                                <p className='text-danger'>{svForm.errors.email}</p>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <button className="btn btn-success" type='submit' disabled={!svForm.isValid}>{!isEditSV ? 'Thêm' : 'Sửa'} sinh viên</button>
                            <p className='text-danger mt-2'>{errMaSV}</p>
                        </div>
                    </form>
                </div>
            </div>
            <DanhSachSinhVien onSVDetail={getSinhVienDetail} />
        </>

    )
}

export default FormSinhVien