import { useEffect, useState } from "react"


function EvenOdd() {
    let [InputValue, setInputValue] = useState(1)
    let [answer, setAnswer] = useState("odd")

    useEffect(()=>{

        let v=parseInt(InputValue)
        if(v%2==0)
            setAnswer("even")
        else
            setAnswer("odd")
       // console.log("EvenOdd")
    },[InputValue])

    return (
        <div>
            <input type="number" value={InputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)

                   // console.log(InputValue)
                }} />

            <h1>{answer}</h1>
        </div>
    )
}

export default EvenOdd