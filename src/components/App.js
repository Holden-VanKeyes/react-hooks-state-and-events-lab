import React, { useState } from 'react'
import ShoppingList from './ShoppingList'

import itemData from '../data/items'
//import { useState } from 'react/cjs/react.production.min'

function App() {
  const [toggle, setToggle] = useState('false')

  function handleClick() {
    setToggle(!toggle)
  }

  const appClass = toggle ? 'App dark' : 'App light'

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {toggle ? 'Dark Mode' : 'Light Mode'}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  )
}

export default App
