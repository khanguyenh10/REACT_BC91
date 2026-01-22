import React from 'react'
import obStyleModule from './StyleComponentDemo.module.css';


// let ob = {
//     ['key-abc']:'value'
// }

// ob.key
// ob['key-abc']
const StyleComponentDemo = () => {
    let classTextPink = obStyleModule['text-pink'];
    let classBgRed = obStyleModule.bgRed;
    console.log(classTextPink);
    console.log(classBgRed);
    let obStyle = {
        backgroundColor: 'blue',
        color: 'orange'
    };

    return (
        <>
            <div>StyleComponentDemo</div>
            <p className='h-heading'>Lorem ipsum dolor sit amet.</p>
            <p style={{ backgroundColor: 'red' }}>Lorem ipsum dolor sit amet.</p>
            <p style={obStyle}>Lorem ipsum dolor sit amet.</p>
            {/* Dùng html to jsx để convert */}
            {/* <p style="background-color: red">Lorem ipsum dolor sit amet.</p> */}
            <p className={`${obStyleModule['text-pink']} fs-5 ${obStyleModule.bgRed}`}>Lorem ipsum dolor sit amet.</p>
        </>


    )
}

export default StyleComponentDemo