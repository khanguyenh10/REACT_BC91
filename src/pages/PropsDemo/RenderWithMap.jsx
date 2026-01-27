import React from 'react'
import CardDemo from './CardDemo';

const RenderWithMap = () => {
    const arrProduct = [
        { id: 1, name: 'Iphone', price: 1000, img: `https://dummyimage.com/600x400/000/fff?text=iphone` },
        { id: 2, name: 'Xiaomi', price: 2000, img: `https://dummyimage.com/600x400/000/fff?text=xiaomi` },
        { id: 3, name: 'Samsung phone', price: 3000, img: `https://dummyimage.com/600x400/000/fff?text=Samsung` }
    ];

    const renderProduct = () => {
        //intput: arrProduct
        let arrJSX = [];
        for (let prod of arrProduct) {

            let tagJSX = <div className='col-4' key={prod.id}>
                <CardDemo product={prod} />
            </div>
            arrJSX.push(tagJSX);
        }
        //return arrJSX [<div col-4> , <div col-4>,...]
        return arrJSX;
    }

    let renderMapProduct = () => {
        let arrJSX = arrProduct.map((prod, index) => {
            return <div className='col-4' key={prod.id}>
                <CardDemo product={prod} />
            </div>;
        });
        return arrJSX;
    }

    let arrNumber = [1, 2, 3, 4];

    let arrLi = arrNumber.map((number, index) => {

        return <li>number</li>
    })

    console.log(arrLi);

    //Nếu muốn render các thẻ jsx đồng cấp thì phải chứa trong mảng và 1 prop tên key không được trùng nhau
    return (
        // [<div key={1}>RenderWithMap</div>, <div key={2}>abc</div>]

        <div className='container'>
            <h3>Danh sách sản phẩm</h3>
            <div className='row'>
                {/* {renderProduct()} */}
                {renderMapProduct()}
            </div>
            <ul>
                {arrNumber.map((number, index) => {
                    return <li key={index}>{number}</li>
                })}
            </ul>
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>img</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {arrProduct.map((prod) => (
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td><img src={prod.img} width={50} height={50} alt='...' /></td>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RenderWithMap