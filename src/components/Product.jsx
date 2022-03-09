import ListItemText from '@mui/material/ListItemText';
import { useState } from "react"

function Product(props) {

  const { name, price } = props.eachProductProps

  const [ quantity, setQuantity ] = useState(0)

  const handleChange = (event) => {
    setQuantity(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // esto deberia agregar el elemento y la cantidad al estado de boughtProducts
    // ?
    props.addToBoughtProducts({ name, price, quantity })
  }

  return (
    <div className="container">
    
      {/* <h3>{name}</h3>
      <p>Precio: {price}€</p> */}
      <ListItemText primary={name} secondary={`Precio: ${price}€`}/>

      <form onSubmit={handleSubmit}>
        <input type="number" name="quantity" value={quantity} onChange={handleChange} />
        <button>Comprar</button>
      </form>
    
    </div>
  )
}

export default Product