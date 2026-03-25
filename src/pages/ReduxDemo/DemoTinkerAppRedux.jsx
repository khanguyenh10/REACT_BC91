import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const DemoTinkerAppRedux = () => {
    const { numberPeopleReducer } = useSelector(rootState => rootState);
    const dispatch = useDispatch();
    const changeAvatar = () => {
        dispatch({ type: 'CHANGE_INDEX_ACTION' });
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <div className="card w-25 ">
                        <div className="card-header bg-danger ">
                            Tinker App
                        </div>
                        <img src={`https://i.pravatar.cc?u=${numberPeopleReducer}`} className='' />
                        <div className="card-body">
                            <h3 className="card-title">Bob</h3>
                            <p className="card-text">Love hiking and outdoors</p>
                            <p><b>Age : 19</b></p>
                            <div className='d-flex justify-content-between'>
                                <button className='btn btn-outline-dark' onClick={changeAvatar}>x Dislike</button>
                                <button className='btn btn-outline-danger' onClick={changeAvatar}> Like</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default DemoTinkerAppRedux