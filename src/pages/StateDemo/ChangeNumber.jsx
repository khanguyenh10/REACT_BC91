import React from 'react'

const ChangeNumber = () => {
    //hook(Hàm chỉ sử dụng cho function component) useState : Quản lý giá trị thay đổi trên giao diện

    //[number,function(newNumber) => number = newNumber]

    const [count, setCount] = React.useState(10);
    return (
        <div className='container'>
            <h1>Count: <span className='text text-danger'>{count}</span></h1>
            <button className='btn btn-dark me-2' onClick={() => setCount(count + 1)}>+</button>
            <button className='btn btn-dark me-2' onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default ChangeNumber