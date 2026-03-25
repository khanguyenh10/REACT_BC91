import React, { memo } from 'react'

const Fruit = ({ item, onDelete }) => {
    console.log('Fruit component rendered ' + item.id);
    return (
        <div>
            <p>Name: {item.name} - id:{item.id}
                <button className='btn btn-danger' onClick={() => onDelete(item.id)}>Delete</button>

            </p>
        </div>
    )
}

export default memo(Fruit)