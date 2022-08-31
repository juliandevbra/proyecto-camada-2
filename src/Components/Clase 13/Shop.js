import React, { useState } from 'react'
import Item from './Item'
import myPoke from './myPoke.json'
import './Shop.css'

const Shop = ({total, setTotal}) => {

  return (
    <div className='shop'>
        {myPoke.map(item => 
          <Item item={item} key={item.id} total={total} setTotal={setTotal}/>
        )}
    </div>
  )
}

export default Shop