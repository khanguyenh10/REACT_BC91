import React, { useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import HeadingTitle from '../components/HeadingTitle'
import SearchFilter from '../components/SearchFilter'
import Products from '../components/Products'
import { getProductApi } from '../api/productApi'
import { useSearchParams } from 'react-router-dom'
import { sortAscending, sortDescending } from '../util/sortUtil'

const Search = () => {
    const [products, setProducts] = React.useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('q');
    const [isDescending, setIsDescending] = React.useState(true);
    const productsSorted = isDescending ? sortDescending(products, 'name') : sortAscending(products, 'name');

    const getProducts = async () => {
        try {
            let response = await getProductApi(keyword);
            setProducts(response.data.content.slice(0, 18));
        } catch (error) {

        }

    }
    useEffect(() => {
        getProducts();
    }, []);

    console.log(products);


    const handleSearchSubmit = () => {
        getProducts();
    }

    return (
        <div className='search-page'>
            <div className="container">
                <SearchForm onSearchSubmit={handleSearchSubmit} keyword={keyword} setSearchParams={setSearchParams} />
                <div className="row">
                    <div className="col-md-12">
                        <HeadingTitle title={'Search result'} />
                    </div>
                </div>
                <div className="p-md-5 pb-md-0 g-md-5">
                    <div className="col-md-6">
                        <SearchFilter setIsDescending={setIsDescending} isDescending={isDescending} />
                    </div>
                </div>
                <Products products={productsSorted} />
            </div>
        </div>
    )
}

export default Search