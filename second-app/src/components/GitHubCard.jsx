import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function GitHubCard() {

    let [githubData, setGitHubData] = useState({});
    let [repositories, setRepositories] = useState([]);
    let [searchQuery, setSearchQuery] = useState("")

    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }

    useEffect(() => {

        fetch("https://api.github.com/users/Hamzaa605")
            .then(data => data.json())
            .then(data => {

                setGitHubData(data);

                fetch(data.repos_url)
                    .then(repos => repos.json())
                    .then(repos => {

                        // console.log("Repos"+repos);
                        setRepositories(repos)
                    })

            })

    }, [])
    return (
        <div>
            <h1>GitHub Profile</h1>
            <div className="card github-card">
                <img src={githubData.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-title">Name :{githubData.name}</p>
                    <p className="card-text">Followers :{githubData.followers}</p>
                    <a href={githubData.html_url}>Click here to visit GitHub Profile</a>
                </div>
            </div>

            {/* Search start*/}

            <input type="text" onChange={ handleChange} />

            {/* Search end */}

            {/*Repositories start */}

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Repository Name</th>
                        <th scope="col">Repository Link</th>

                    </tr>
                </thead>
                <tbody>
                    {repositories.filter((repoObj) => {
                        return repoObj.name.toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    })
                        .map((repoObj) => {

                            return (<tr>
                                <th scope="row">{repoObj.name}</th>
                                <td><a href={repoObj.html_url}>Click here to visit repo</a></td>

                            </tr>)

                        })}



                </tbody>
            </table>

            {/*Repositories End */}

        </div>
    )
}

export default GitHubCard