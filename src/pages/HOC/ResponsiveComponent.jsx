import React, { useEffect, useState } from 'react'

/*
 props:
    + Component
    + MobileComponent
    <ReponsiveComponent Component={Home} MobileComponent={HomeMobile} />
*/
const ResponsiveComponent = (props) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    let Component = props.Component;
    if (screenWidth < 768 && props.MobileComponent) {
        Component = props.MobileComponent;
    }
    const handleChangeScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleChangeScreenWidth);
        return () => {
            window.removeEventListener('resize', handleChangeScreenWidth);
        }
    }, [screenWidth])
    return (
        <div>{Component}</div>
    )
}

export default ResponsiveComponent