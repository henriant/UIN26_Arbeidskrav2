import { useState } from "react"
import "../style/form.scss"
export default function AddForm({shoppingItem, setShoppingItem, setShoppingList}) {
    const [error, setError] = useState("")
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setShoppingItem((prev) => ({...prev,[name]: value}))

    }

    const handleClick = (e) => {
        e.preventDefault()
        if (!shoppingItem?.name || !shoppingItem?.amount) {
            setError("Både varenavn og antall må fylles ut!")
            return
        }

        const uniqueID = crypto.randomUUID()
        setShoppingList(prev => ([
            {id: uniqueID, ...shoppingItem, purchased: false},
            ...prev 
        ]))
        setShoppingItem({})
        setError("")
    }

    return (
        <form className="shoppinglistform" onSubmit={handleClick}>
            <h3>Handleliste</h3>
            <label htmlFor="shoppingitemname">Vare</label>
            <input name="name" type="text" id="shoppingitemname" placeholder="Brød..." onChange={handleChange} value= {shoppingItem?.name || ""} />
            <label htmlFor="shoppingitemamount">Antall</label>
            <input name="amount" type="number" id="shoppingitemamount" placeholder="2" onChange={handleChange} value={shoppingItem?.amount || ""} min="1"></input>
            {error && <p className="error">{error}</p>}
            <button>Legg til vare</button>
        </form>
    )

}