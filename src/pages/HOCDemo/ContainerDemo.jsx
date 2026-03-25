import React, { useState } from 'react'
import ModalContainer from '../HOC/ModalContainer'
import Login from '../Login';
import Register from '../Register';
import useRedux from '../CustomHook/useRedux';
import { changeContentDrawerAction } from '../../redux/reducer/DrawerReducer';
import DemoChangeCarRedux from '../ReduxDemo/DemoChangeCarRedux';
import DemoFormikYup from '../ReactFormDemo/DemoFormikYup';

const ContainerDemo = () => {
    const { dispatch, rootState } = useRedux();
    const [Component, setComponent] = useState(<Login />);
    return (
        <div className='container'>
            <h3>Container component demo</h3>
            <button className='btn btn-dark me-2' data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => setComponent(<Login />)}>Open login</button>

            <button className='btn btn-dark me-2' data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => setComponent(<Register />)}>Open register</button>
            <ModalContainer title='abc' contentComponent={Component} />


            <button className='btn btn-dark my-2' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" onClick={() => {
                const action = changeContentDrawerAction({ title: 'abc', contentComponent: <DemoChangeCarRedux /> });
                dispatch(action);
            }}>Open drawer</button>

            <button className='btn btn-dark my-2' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" onClick={() => {
                const action = changeContentDrawerAction({ title: 'formik', contentComponent: <DemoFormikYup /> });
                dispatch(action);
            }}>Open formik</button>
        </div>
    )
}

export default ContainerDemo