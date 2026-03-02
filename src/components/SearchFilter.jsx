import React from 'react'
import { ArrowDownIcon } from './icons/main'

const SearchFilter = (props) => {
    const { isDescending = true } = props;
    return (
        <div className='search-filter'>
            <h3 className='title'>Price</h3>
            <ul>
                <li className='mb-3'>
                    <button className='btn d-flex justify-content-between'>
                        <span>decrease</span>
                        {isDescending && <ArrowDownIcon />}
                    </button>
                </li>
                <li>
                    <button className='btn d-flex justify-content-between'>
                        <span>ascending</span>
                        <span style={{ transform: 'rotate(180deg)' }}>
                            {!isDescending && <ArrowDownIcon />}
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SearchFilter