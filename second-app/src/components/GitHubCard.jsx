import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function GitHubCard() {

    let [githubData, setGitHubData] = useState({});
    useEffect(() => {

        fetch("https://api.github.com/users/Hamzaa605")
            .then(data => data.json())
            .then(data => {
                
                console.log(data);
            })

    }, [])
    return (
        <div>
            <h1>GitHub Profile</h1>
            <div className="card github-card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"></p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    )
}

export default GitHubCard