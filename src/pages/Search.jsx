import React, { useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import HeadingTitle from '../components/HeadingTitle'
import SearchFilter from '../components/SearchFilter'
import Products from '../components/Products'
import { getProductApi } from '../api/productApi'
import { useSearchParams } from 'react-router-dom'
import { sortAscending, sortDescending } from '../util/sortUtil'
import useRedux from '@/hooks/useRedux'
import { getAllProductActionThunk } from '@/redux/reducer/productReducer'
import { getProductFavoritesActionThunk } from '@/redux/reducer/userReducer'

const Search = () => {
    const { useAppSelector, dispatch } = useRedux();
    const { arrProduct: products } = useAppSelector(state => state.productReducer);
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('q') || '';
    const [isDescending, setIsDescending] = React.useState(true);
    const productsSorted = isDescending ? sortDescending(products, 'name') : sortAscending(products, 'name');

    const handleSearchSubmit = () => {
        dispatch(getAllProductActionThunk(keyword));
    }
    // callApi product theo keyword khi vào trang search
    useEffect(() => {
        dispatch(getAllProductActionThunk(keyword));
    }, []);
    // call api lấy arrProduct yêu thích của user để hiển thị ở trang search chỉ gọi khi có accessToken
    useEffect(() => {
        dispatch(getProductFavoritesActionThunk());
    }, []);


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