import React from 'react'
import Display from './Components/Display/Display'
import Button from './Components/Buttons/Button'

const App = () => {
  return (
    <div style={{border:'1px solid black', borderRadius:'5px', padding:'10px', margin:'10px' , maxWidth:'300px', marginLeft:'auto', marginRight:'auto'}}>
       <Display />
       <Button />
    </div>
  )
}

export default App
