import ShoppingItem from "./ShoppingItem"
import "../style/shoppinglist.scss"

export default function ShoppingList({shoppingItems, setShoppingList}) {
    
    return (
       <section className="shopping-list">
            {shoppingItems.map((shoppingItem) => <ShoppingItem key={shoppingItem.id} name={shoppingItem.name} amount={shoppingItem.amount} id={shoppingItem.id} purchased={shoppingItem.purchased} setShoppingList={setShoppingList} />)}
       </section>
    )
}