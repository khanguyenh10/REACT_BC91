import React from 'react'

const TinkerApp = () => {
    const [index, setIndex] = React.useState(1);

    const changeAvatar = () => {
        let numRandom = Math.floor(Math.random() * 99) + 1;  //Trả từ 0 đến 98 => + 1
        setIndex(numRandom);
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <div className="card w-25 ">
                        <div className="card-header bg-danger ">
                            Tinker App
                        </div>
                        <img src={`https://i.pravatar.cc?u=${index}`} className='' />
                        <div className="card-body">
                            <h3 className="card-title">Bob</h3>
                            <p className="card-text">Love hiking and outdoors</p>
                            <p><b>Age : 19</b></p>
                            <div className='d-flex justify-content-between'>
                                <button className='btn btn-outline-dark' onClick={changeAvatar}>x Dislike</button>
                                <button className='btn btn-outline-danger' onClick={changeAvatar}> Like</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default TinkerApp