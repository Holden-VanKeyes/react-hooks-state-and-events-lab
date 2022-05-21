import React, { useState } from 'react'

function Item({ name, category }) {
  const [cartUpdater, setCartUpdater] = useState(false)

  function handleClick() {
    setCartUpdater((cartUpdater) => !cartUpdater)
  }
  return (
    <li className={cartUpdater ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">
        {cartUpdater ? 'Remove From' : 'Add To'} Cart
      </button>
    </li>
  )
}

export default Item
