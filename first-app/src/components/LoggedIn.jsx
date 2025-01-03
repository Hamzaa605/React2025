import { useState } from "react"


function LoggedIn() {
    let [loggedIn, setLoggedIn] = useState(false)
    return (
        <div>
            
            {
                true && <h1>Condition is True</h1>
            }

            <hr />
            {
                loggedIn ?
                    <div><h1>Welcome user</h1>
                        <button onClick={() => {
                            setLoggedIn(false)
                        }}>Log out</button>
                    </div> :

                    <button onClick={() => {
                        setLoggedIn(true)
                    }}>Log in</button>
            }


        </div>
    )
}

export default LoggedIn