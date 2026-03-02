import React from 'react'
import { HeartEmptyIcon, HeartIcon } from './icons/main';

const ShoeFavorite = (props) => {
    const { isLiked } = props;
    return (
        <div className='hearts text-end'>
            {isLiked ? <HeartIcon /> :
                <HeartEmptyIcon />}
        </div>
    )
}

export default ShoeFavorite