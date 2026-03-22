import React, { useEffect } from 'react'
import FormItem from './FormItem'

const SearchForm = (props) => {
    const { keyword, onSearchSubmit, setSearchParams } = props;

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit();
    }
    const handleSearch = (e) => {
        setSearchParams({ q: e.target.value });
    }
    return (
        <div className='search-form'>
            <form className="form" onSubmit={handleSearchSubmit}>
                <div className="py-4 p-md-5 d-flex gap-2 gap-md-5 align-items-end">
                    <FormItem label="Search" type="text" name="search" placeholder='product name...' value={keyword} onChange={handleSearch} />
                    <button type='submit' className='btn btn-search '>Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm