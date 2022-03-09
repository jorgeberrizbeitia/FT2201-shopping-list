import { useState } from "react"

import AddForm from "../components/AddForm"
import Product from "../components/Product"
import Search from "../components/Search"
import BoughtList from "../components/BoughtList";

//MUI
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

const intialProducts = [
  { name: "Agua", price: 1 },
  { name: "Papel de baño", price: 5 },
  { name: "Pan", price: 2 },
]

function ShoppingList() {

  const [ products, setProducts ] = useState(intialProducts)
  const [ showForm, setShowForm ] = useState(false)
  const [ productsToRender, setProductsToRender ] = useState(intialProducts)
  const [ boughtProducts, setBoughtProducts ] = useState([])


  const addProduct = (product) => {
    setProducts( [...products, product] )
    setProductsToRender( [...products, product] ) // para que el search funcione
  }

  // crear una funcion que filtre los elementos de un array (array es el estado)
  const searchProducts = (searchQuery) => {
    console.log("searchProducts", searchQuery)
    // aqui es donde filtraremos los elementos
    const filteredProducts = products.filter((eachProduct) => {
      return eachProduct.name.includes(searchQuery) // ""
    })
    console.log(filteredProducts)
    // setProducts(filteredProducts) // esto nos haría perder nuestro estado original
    setProductsToRender(filteredProducts)
  }

  const addToBoughtProducts = (productToBuy) => {
    console.log("producto a comprar es:", productToBuy)
    setBoughtProducts( [...boughtProducts, productToBuy])
  }

  return (
    <div>
    
        <h1>Shopping  List</h1>

        <Button color="success" variant="contained" onClick={ () => setShowForm(!showForm) }> {showForm ? "Ocultar Formulario" : "Ver Formulario"} </Button>
        {/* <AddForm setProducts={setProducts} products={products}/> */}

        <Collapse in={showForm}>
          <AddForm addProduct={addProduct}/>
        </Collapse>
        {/* { showForm && <AddForm addProduct={addProduct}/> } */}

        <Search searchProducts={searchProducts} />

        {productsToRender.map((eachProduct, index) => {

          return (
            <Product eachProductProps={eachProduct} key={index + eachProduct.name} addToBoughtProducts={addToBoughtProducts}/>
          )

        })}

        <BoughtList boughtProducts={boughtProducts}/>
    
    </div>
  )
}

export default ShoppingList