import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const DemoChangeNumberRedux = () => {
    //useSelector là hook dùng để lấy state từ redux về component
    // const numberReducer = useSelector(rootState => rootState.numberReducer);
    // const abcReducer = useSelector(rootState=>rootState.abcReducer);
    const { numberReducer, abcReducer } = useSelector(rootState => rootState);

    const dispatch = useDispatch(); //hook dùng để gửi dữ liệu về store
    /*
        dữ liệu gửi về store sẽ là dạng object bắt buộc có format sau
        const action = {
            type:'TEN_KHONG_TRUNG_VOI_CAC_NGHIEP_VU_STATE'
            payload: Dữ liệu gửi đi
        
        }
    */
    const handleChangeNumber = () => {
        //Bước 1: tạo ra object action
        const action = {
            type: 'CHANGE_NUMBER_ACTION',
            payload: 1
        }
        //Bước 2: Dispatch giá trị lên redux store
        dispatch(action);
    }
    return (
        <div className="container">
            <h3>Demo change number redux</h3>
            <h1>Number: {numberReducer} - {abcReducer}</h1>
            <button className='btn btn-success me-2' onClick={handleChangeNumber}>+</button>
            <button className='btn btn-success me-2'>-</button>
        </div>
    )
}

export default DemoChangeNumberRedux