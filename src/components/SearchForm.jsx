import React from 'react'

const SearchForm = () => {
    return (
        <div className='search-form'>
            <form className="form form-search">
                <div className="py-4 p-md-5 d-flex gap-2 gap-md-5 align-items-end">
                    <div className="form-item ">
                        <label >Search</label> <br />
                        <input className='' type="text" placeholder='product name...' />
                    </div>
                    <button type='submit' className='btn btn-search '>Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm