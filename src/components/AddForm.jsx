import { useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function AddForm(props) {

  const [ name, setName ] = useState("")
  const [ price, setPrice ] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault() // previene el comportamiento predeterminado de enviar formularios (renderizar todo de nuevo)
    console.log("intentando agregar producto")
    // ????
    // aqui podríamos tener acceso a la funcion setProducts que modifica el estado products
    // const productsCopy = [...props.products]
    // productsCopy.push( { name, price } )
    // props.setProducts(productsCopy)
    // props.setProducts( [...props.products, { name, price } ]  )
    props.addProduct({name, price})
  }

  const handleNameChange = (event) => {
    setName(event.target.value) // ejemplo de forzar mayusculas en campo
    // setName(event.target.value.toUpperCase()) // ejemplo de forzar mayusculas en campo
    // setName("LOL") // ejemplo tonto del control del campo
  }

  const handlePriceChange = (event) => setPrice(event.target.value)

  return (
    <div className="container">
    
      <form onSubmit={handleSubmit}>

        {/* <label htmlFor="name">Nombre:</label> */}
        <TextField label="Nombre" type="text" name="name" value={name} onChange={handleNameChange}/>

        {/* <label htmlFor="price">Precio:</label> */}
        <TextField label="Precio" type="number" name="price" value={price} onChange={handlePriceChange}/>

        <br />

        <Button 
          type="submit" 
          variant="contained" 
          color="secondary" 
          size="small"
        >
          Agregar Producto
        </Button>

      </form>
    
    </div>
  )
}

export default AddForm