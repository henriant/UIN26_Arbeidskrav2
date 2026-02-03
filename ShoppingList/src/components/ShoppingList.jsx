import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({shoppingItems, setShoppingList}) {
    
    return (
       <section className="">
            {shoppingItems.map((shoppingItem) => <ShoppingItem key={shoppingItem.id} name={shoppingItem.name} amount={shoppingItem.amount} id={shoppingItem.id} setShoppingList={setShoppingList} />)}
       </section>
    )
}