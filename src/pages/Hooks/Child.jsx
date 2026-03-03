import React, { memo } from 'react'

const Child = () => {
    // memo: ko bị render lại component nếu ko có props 
    console.log('Child component rendered');
    return (
        <div>child</div>
    )
}

export default memo(Child)