import React, { useState } from 'react'

const Item = ({item, total, setTotal}) => {

    const [cantidad, setCantidad] = useState(item.stock)

    const buy = () =>{
        setCantidad(cantidad - 1)
        setTotal({
            precio: total.precio + item.price, 
            stock: total.stock + 1
        })
    }

  return (
    <section  className='item-card'>
        <h3>{item.item}</h3>
        <img src={item.img} alt='' className='item-img'/>
        <h3>${item.price}</h3>
        <p>En Stock: {cantidad > 0 ? cantidad : 'OUT OF STOCK'}</p>
        {cantidad > 0 ? 
            <button 
                onClick={buy}
                className='item-button'>
                BUY
            </button> 
            : 
            <button disabled className='item-disabled'>
                OUT OF STOCK
            </button>
        }
     </section>
  )
}

export default Item


