import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const DemoChangeCarRedux = () => {
    const { imgCarReducer } = useSelector(rootState => rootState);

    const dispatch = useDispatch(); //hook dùng để gửi dữ liệu về store
    /*
        dữ liệu gửi về store sẽ là dạng object bắt buộc có format sau
        const action = {
            type:'TEN_KHONG_TRUNG_VOI_CAC_NGHIEP_VU_STATE'
            payload: Dữ liệu gửi đi
        
        }
    */
    const changeCarColor = (color) => {
        //Bước 1: tạo ra object action
        const action = {
            type: 'CHANGE_CAR_ACTION',
            payload: color
        }
        //Bước 2: Dispatch giá trị lên redux store
        dispatch(action);
    }

    return (
        <div>
            <h3>Change color car</h3>
            <div className='d-flex gap-2 align-items-center'>
                <img src={imgCarReducer} width={500} />
                <div className='d-flex gap-2'>
                    <button className='btn btn-danger' onClick={() => changeCarColor('red')}>Red color</button>
                    <button className='btn btn-secondary' onClick={() => changeCarColor('silver')}>Silver color</button>
                    <button className='btn btn-dark' onClick={() => changeCarColor('black')}>Black color</button>
                </div>
            </div>

        </div>
    )
}

export default DemoChangeCarRedux