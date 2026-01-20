import React from 'react'
import HeaderAlbum from '../components/Album/HeaderAlbum'
import ContentAlbum from '../components/Album/ContentAlbum'
import CarouselAlbum from '../components/Album/CarouselAlbum'
import FooterAlbum from '../components/Album/FooterAlbum'

const BaiTapAlbum = () => {
    return (
        <>
            <HeaderAlbum />
            <main>
                <CarouselAlbum />
                <ContentAlbum />
            </main>
            <FooterAlbum />
        </>
    )
}

export default BaiTapAlbum