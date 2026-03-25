import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useRedux = () => {
    const rootState = useSelector(state => state);
    const dispatch = useDispatch();


    return {
        rootState,
        dispatch
    }
}

export default useRedux