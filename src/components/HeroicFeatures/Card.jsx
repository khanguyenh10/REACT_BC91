import React from 'react'

const Card = () => {
    return (
        <div class="card text-center">
            <div className='card-header bg-secondary text-white d-flex align-items-center justify-content-center display-5 ' style={{ height: '325px' }}>
                500x325
            </div>
            <div class="card-body">
                <h4 class="card-title">Card Title</h4>
                <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quae molestias earum quidem fuga, laboriosam nemo. Laboriosam quia omnis minima quibusdam doloribus repudiandae tempore, quis obcaecati beatae harum ipsam ipsum!</p>
            </div>
            <div className="card-footer ">
                <button className='btn btn-primary'>Find Out More </button>
            </div>
        </div>


    )
}

export default Card

