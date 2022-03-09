

function BoughtList(props) {

  console.log(props.boughtProducts)

  const total = props.boughtProducts.reduce((acc, eachBoughtProduct) => {
    return acc + (eachBoughtProduct.quantity * eachBoughtProduct.price)
  }, 0)
  
  return (
    <div>

      <h3>Productos comprados</h3>
    
      {props.boughtProducts.map((eachBoughtProduct) => {
        const { name, quantity, price } = eachBoughtProduct
        return <p>{name}: {quantity} x {price}€ : {quantity * price}€ </p>
      })}

      <p>Total: {total}€</p>

    </div>
  )
}

export default BoughtList