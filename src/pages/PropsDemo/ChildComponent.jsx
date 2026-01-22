import React from 'react'

/*
    Prop là giá trị từ component cha truyền vào 
    string, bool, number, object, array, function...
*/

const ChildComponent = (props) => {
    const { title, view } = props;
    return (
        <div className='bg-dark text-white p-3 rounded my-2'>
            {title} - <i className='fa fa-eye'></i> {view}
        </div>
    )
}

export default ChildComponent