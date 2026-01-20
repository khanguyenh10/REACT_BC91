import React from 'react'
import CardAlbum from './CardAlbum'

const ContentAlbum = () => {
    return (
        <div className='album py-5 bg-body-tertiary'>
            <div className="container">
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    <div className="col">
                        <CardAlbum />
                    </div>
                    <div className="col">
                        <CardAlbum />
                    </div>
                    <div className="col">
                        <CardAlbum />
                    </div>
                    <div className="col">
                        <CardAlbum />
                    </div>
                    <div className="col">
                        <CardAlbum />
                    </div>
                    <div className="col">
                        <CardAlbum />
                    </div>
                    <div className="col">
                        <CardAlbum />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContentAlbum