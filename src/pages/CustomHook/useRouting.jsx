import React from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'

const useRouting = () => {
    const params = useParams();//Lấy tham số /:thamso
    const [searchParams, setSearchParams] = useSearchParams(); //lấy tham số ?thamso=abc&thamso2=abc
    const location = useLocation(); // create edit 
    const navigate = useNavigate();



    return {
        params: params,
        searchParams: searchParams,
        setSearchParams: setSearchParams,
        location: location,
        navigate: navigate
    }
}

export default useRouting