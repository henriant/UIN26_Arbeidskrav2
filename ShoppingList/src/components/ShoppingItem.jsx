export default function ShoppingItem({name, amount, id, purchased, setShoppingList}){

    const handlePurchaseChange = () => {
        setShoppingList(prev => prev.map(item => item.id === id? {...item, purchased: !item.purchased} : item))
    }

    const handleAmountChange = (e) => {
        const newAmount = parseInt(e.target.value)
        if (newAmount > 0) {
            setShoppingList(prev => prev.map(item => item.id === id? {...item, amount: newAmount} : item))
        }
    }

    return (
        <article className="shopping-item">
            <input type="checkbox" checked={purchased} onChange={handlePurchaseChange} />
            <h3>{name}</h3>
            <input type="number" value={amount} onChange={handleAmountChange} min="1" />
        </article>
    )

}