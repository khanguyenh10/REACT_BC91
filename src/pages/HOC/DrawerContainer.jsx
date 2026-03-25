//rafce
import React from 'react'
import { useSelector } from 'react-redux'

const DrawerContainer = () => {
    const { title, contentComponent, handleSubmit } = useSelector(rootState => rootState.DrawerReducer);
    return (
        <div>
            {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">{title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                    {contentComponent}
                </div>
                <div className="offcanvas-footer text-end">
                    <button className='btn btn-success' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>

    )
}

export default DrawerContainer