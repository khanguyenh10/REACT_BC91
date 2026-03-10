import React, { memo } from 'react'

const ChildComponent = (props) => {
    console.log('child render')

    return (
        <div>ChildComponent

            <p>Like:</p>
            {props.renderLike()}
        </div>
    )
}

export default memo(ChildComponent) //ChildComponet