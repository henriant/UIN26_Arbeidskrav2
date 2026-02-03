import "../style/form.scss"
export default function AddForm({shoppingItem, setShoppingItem, setShoppingList}) {
    
    const handleChange = (e) => {
        const {name, value} = e.target

        setShoppingItem((prev) => ({...prev,[name]: value}))

    }

    const handleClick = (e) => {
        e.preventDefault()
        const uniqueID = crypto.randomUUID()
        setShoppingList((prev) => ([...prev, {id: uniqueID, ...shoppingItem}]))
        console.log(shoppingItem)
    }

    return (
        <form className="shoppinglistform" onSubmit={handleClick}>
            <h3>Handleliste</h3>
            <label htmlFor="shoppingitemname">Vare</label>
            <input name="name" type="text" id="shoppingitemname" placeholder="Brød..." onChange={handleChange}></input>
            <label htmlFor="shoppingitemamount">Antall</label>
            <input name="amount" type="number" id="shoppingitemamount" onChange={handleChange}></input>
            <button>Legg til vare</button>
        </form>
    )

}