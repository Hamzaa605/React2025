import { useEffect, useState } from "react"


function DisplayName() {
    let [name, setName] = useState("Hamzaa")
    let [lenght, setLenght] = useState(5)
    let [breadth, setBreadth] = useState(2)
    let [area, setArea] = useState(lenght * breadth)
    useEffect(()=>{setArea(lenght*breadth)},[lenght,breadth])
    return (
        <div>
            <input type="text" value={name}
                onChange={(e) => { setName(e.target.value) }} />
            <h1 className='name1'>{name}</h1>

            <hr />

            <input type="number" placeholder='lenght' value={lenght}
                onChange={(e) => { setLenght(e.target.value) }} />
            <input type="number" placeholder='breadth' value={breadth}
                onChange={(e) => { setBreadth(e.target.value) }} />
            <h1>Area {area}</h1>
        </div>
    )
}

export default DisplayName 