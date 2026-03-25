import React from 'react'
import useRouting from './useRouting'
import useRedux from './useRedux';
import useFetchData from './useFetchData';
import useGetApi from './useGetApi';

const DemoCustomHook = () => {
    const routing = useRouting();
    const { rootState, dispatch } = useRedux();
    // const { data } = useFetchData('https://apistore.cybersoft.edu.vn/api/Product')
    const {
        data,
        loading,
        error,
        refetch
    } = useGetApi('https://apistore.cybersoft.edu.vn/api/Product');

    console.log(rootState);
    const renderApi = () => {
        if (loading) {
            return <p className='bg-dark text-white p-3 my-2'>Loading...</p>
        }
        return data.content.map(item => <p key={item.id}>{item.name}</p>)
    }
    return (
        <div className="container">
            <h3>Custom hoook</h3>
            <button className='btn btn-success' onClick={() => {
                routing.navigate('/');
            }}>back to home</button>
            <h3>Use fetchData</h3>
            {renderApi()}
        </div>
    )
}

export default DemoCustomHook