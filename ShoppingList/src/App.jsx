import { useState } from 'react'
import './App.css'
import ShoppingItem from './components/ShoppingItem'
import ShoppingList from './components/ShoppingList'
import AddForm from './components/AddForm'

function App() {

  const shoppingItems = [
      {
        id: 1,
        name: "Potet",
        amount: 7
      }
  ]

  const [shoppingList, setShoppingList] = useState(shoppingItems)
  const [shoppingItem, setShoppingItem] = useState()

  return (
    <main>
      <AddForm shoppingItem={shoppingItem} setShoppingItem={setShoppingItem} setShoppingList={setShoppingList}/>
      <ShoppingList shoppingItems={shoppingList} setShoppingList={setShoppingList} />
    </main>
  )
}

export default App
