import React from 'react'
import CardAlbum from './Card'
import Card from './Card'

const Content = () => {
    return (
        <section className="pt-4">
            <div className="container px-lg-5">
                {/* Page Features*/}
                <div className="row gx-lg-5">
                    <div className="col-lg-6 col-xxl-3 mb-5">
                        <Card />
                    </div>
                    <div className="col-lg-6 col-xxl-3 mb-5">
                        <Card />
                    </div>
                    <div className="col-lg-6 col-xxl-3 mb-5">
                        <Card />
                    </div>
                    <div className="col-lg-6 col-xxl-3 mb-5">
                        <Card />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Content