import React, { use, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { timSV } from '../redux/reducer/svReducer';

const TimKiemSinhVien = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('q');
    const dispatch = useDispatch();
    const handleSearchParams = (e) => {
        e.preventDefault();
        setSearchParams({ q: e.target.value });
    }
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(timSV(search));
    }
    useEffect(() => {
        dispatch(timSV(search));
    }, [])
    return (
        <form className="d-flex mb-2 w-25" role="search" onSubmit={handleSearch}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchParams} value={search} />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}

export default TimKiemSinhVien