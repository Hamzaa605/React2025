import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'



function Contant() {

  const { id } = useParams()
  const navi=useNavigate()

  return (
    <div>
      <h1>Contant</h1>
      <p>Id fetched from Route {id}</p>
      <button onClick={() => {
        navi("/")
      }}>Click here</button>
    </div>
  )
}

export default Contant