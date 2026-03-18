import React from "react";
import { Button, Rate } from "antd";
const DemoAntd = () => {
    return (
        <>
            <Button color="default" variant="outlined" >
                Solid
            </Button>
            <Rate defaultValue={3.5} allowHalf onChange={() => { console.log('rate') }} />
        </>

    );
};

export default DemoAntd;
