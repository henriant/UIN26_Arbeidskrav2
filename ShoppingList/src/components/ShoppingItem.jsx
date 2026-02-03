export default function ShoppingItem({name, amount, id, setShoppingList}){



    return (
        <article className="shopping-item"> 
            <h3>{name}</h3>
            <p>{amount}</p>
        </article>
    )

}