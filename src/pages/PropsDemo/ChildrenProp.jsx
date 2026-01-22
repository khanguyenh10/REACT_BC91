import React from 'react'
//props.children: Dùng để truyền giao diện jsx qua props
const ChildrenProp = (props) => {
    const { jsxElement } = props;
    return (
        <div>
            <h3>Nội dung innerHTML </h3>
            {props.children}
            {jsxElement}

        </div>
    )
}

export default ChildrenProp