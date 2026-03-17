import React, { useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import HeadingTitle from '../components/HeadingTitle'
import SearchFilter from '../components/SearchFilter'
import Products from '../components/Products'
import { getProductApi } from '../api/productApi'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
    const [products, setProducts] = React.useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('q');
    useEffect(() => {
        const getProducts = async () => {
            try {
                let response = await getProductApi(keyword);
                setProducts(response.data.content.slice(0, 18));
            } catch (error) {

            }

        }
        getProducts();
    }, [])
    console.log(products);


    const handleSearchSubmit = (value) => {
        setSearchParams({ q: value });
    }

    return (
        <div className='search-page'>
            <div className="container">
                <SearchForm onSearchSubmit={handleSearchSubmit} keyword={keyword} />
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
                <Products products={products} />
            </div>
        </div>
    )
}

export default Search