import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

const useFetchData = (url) => {
    const [state, setState] = useState([]);

    const getDataApi = async () => {
        //call api
        const res = await axios.get(url);
        //Lấy dữ liệu api đưa vào state
        setState(res.data.content);

    }

    useEffect(() => {
        getDataApi();
    }, [])


    return {
        data: state
    }
}

export default useFetchData