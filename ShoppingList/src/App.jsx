import { useState } from 'react'
import './App.css'
import ShoppingItem from './components/ShoppingItem'
import ShoppingList from './components/ShoppingList'
import AddForm from './components/AddForm'
import "./style/main.scss";

function App() {

  const shoppingItems = [
      {
        id: 1,
        name: "Melk",
        amount: 2,
        purchased: false
      },
      {
        id: 2,
        name: "Egg",
        amount: 12,
        purchased: true
      }
  ]

  const [shoppingList, setShoppingList] = useState(shoppingItems)
  const [shoppingItem, setShoppingItem] = useState()

  return (
    <main>
      <section className="shopping-container">
        <AddForm shoppingItem={shoppingItem} setShoppingItem={setShoppingItem} setShoppingList={setShoppingList}/>
        <ShoppingList shoppingItems={shoppingList} setShoppingList={setShoppingList} />
      </section>
    </main>
  )
}

export default App
