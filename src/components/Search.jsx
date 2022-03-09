import { useState } from "react"
import TextField from '@mui/material/TextField';

function Search(props) {

  const [ search, setSearch ] = useState("")

  const handleChange = (event) => {
    setSearch(event.target.value)
    
    // ??? 
    props.searchProducts(event.target.value)
  }

  return (
    <div className="container">

      {/* <label htmlFor="search">Buscar:</label> */}
      <TextField label="Buscar" type="text" name="search" value={search} onChange={handleChange}/>
    
    </div>
  )
}

export default Search