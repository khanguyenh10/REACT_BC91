import React from 'react'
import SearchForm from '../components/SearchForm'
import HeadingTitle from '../components/HeadingTitle'
import SearchFilter from '../components/SearchFilter'
import Products from '../components/Products'

const Search = () => {
    return (
        <div className='search-page'>
            <div className="container">
                <SearchForm />
                <div className="row">
                    <div className="col-md-12">
                        <HeadingTitle title={'Search result'} />
                    </div>
                </div>
                <div className="p-md-5 pb-md-0 g-md-5">
                    <div className="col-md-6">
                        <SearchFilter />
                    </div>
                </div>
                <Products />
            </div>
        </div>
    )
}

export default Search