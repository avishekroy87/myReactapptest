import React from 'react'
import UpdatedComponent from './HigherApp'

function Person2({money,handleRaise}) {
  return (
    <div>
       ${money}
        <button onClick={handleRaise}>Raise</button>
    </div>
  )
}

export default UpdatedComponent(Person2)
