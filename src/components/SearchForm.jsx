import React from 'react'
import FormItem from './FormItem'

const SearchForm = () => {
    return (
        <div className='search-form'>
            <form className="form ">
                <div className="py-4 p-md-5 d-flex gap-2 gap-md-5 align-items-end">
                    <FormItem label="Search" type="text" name="search" placeholder='product name...' />
                    <button type='submit' className='btn btn-search '>Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm