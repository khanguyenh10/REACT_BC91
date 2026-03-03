import React, { use, useCallback, useEffect, useState } from 'react'
import Child from './child';
import Fruit from './Fruit';

const Hooks = () => {
    ///useState: render khi dữ liệu thay đổi
    /*useEffect:
        + chạy 1 lần duy nhất
        + chạy lại khi state thay đổi
        + destroy component
      useMemo
      useCallback: cache lại cái func
    */
    const [counter, setCounter] = React.useState(0);

    const [fruit, setFruit] = useState([
        { id: 1, name: 'apple' },
        { id: 2, name: 'banana' },
        { id: 3, name: 'orange' },
    ])
    console.log('Parent component rendered');

    const handleDelete = useCallback((id) => {
        const newFruit = fruit.filter(item => item.id !== id);
        setFruit(newFruit)
    }, []);


    const renderFruit = () => {
        return fruit.map((item) => {
            return <Fruit key={item.id} item={item} onDelete={handleDelete} />
        })
    }
    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    //Chạy 1 lần duy nhất - nếu để mảng rỗng
    useEffect(() => {
        const fetchData = () => {
            console.log('fetch data');
        }
        fetchData();
    }, []);
    //chạy lại khi deoendencies thay đổi
    useEffect(() => {
        const fetchDataPagination = () => {
            console.log('fetch data pagination');
        }
        fetchDataPagination();

    }, [counter])

    // useEffect(() => {
    //     // mỗi giây thực thi bên trong func
    //     let interval = setInterval(() => {
    //         console.log('Hello cybersoft');
    //     }, 1000)

    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, [])
    return (
        <div>
            <h1>Hook</h1>
            <p>Counter: {counter}</p>
            <button className=' btn btn-success' onClick={handleIncrement}>+</button>
            <Child />
            {/* <Child data={counter} /> */}
            {renderFruit()}
        </div>
    )
}
export default Hooks