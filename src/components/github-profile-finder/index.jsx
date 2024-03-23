import { useEffect, useState } from "react";
import User from "./user";
import './index.css';

export default function GithubProfilefinder() {

    const [userName, setUserName]  = useState('azizedogan');
    const [userData, setuserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();

        console.log(data)

        if(data) {
            setuserData(data);
            setLoading(false);
            setUserName('');
        }
    }

    function handleSubmit() {
        fetchGithubUserData();
    }

    useEffect(() => {
       fetchGithubUserData();
    }, []);

    if(loading) {
        return <h1>Loading data! Please Wait</h1>;
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input 
                    type="text" 
                    name="search-by-username" 
                    placeholder="Search Github Username.."
                    value={userName} 
                    onChange={(event) => setUserName(event.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            { userData !== null ? <User user={userData} /> : null }
        </div>
    );
}