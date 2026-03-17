import React, { Children, useEffect } from 'react'
import { toastError } from '../util/toast';
import Loading from './ui/Loading';

const RequestHandler = ({ isLoading, error, children }) => {
    if (isLoading) return <Loading />;
    useEffect(() => {
        if (error) toastError(error);
    }, [error]);
    return children;
}

export default RequestHandler