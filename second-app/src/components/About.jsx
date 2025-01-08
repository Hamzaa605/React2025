import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function About() {

  let [searchParam, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  console.log(searchParam.get("Pincode"));

  return (
    <div>
      <h1>About</h1>
      <button onClick={() => {
        navigate("/contact/1")
      }}>Click here</button>
    </div>

  )
}

export default About