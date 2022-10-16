import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const Puppies = () => {
    const [puppies, setPuppies] = useState([])

    useEffect(() => {

        async function fetchPuppyData () {

            try {
                const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players");
                    // console.log(response)
                const data = await response.json();
                    // console.log(data)
                    // console.log("This is data results", data.data.players)
                setPuppies(data.data.players)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPuppyData();
}, [])

return (
    <div>
        <h2>Hello Puppies!</h2>

        <div id="puppy-container">
        {
            puppies && puppies.length ? puppies.map((indivPuppies, idx) => {
                console.log("Puppies", indivPuppies)
                return <div key={idx}>
                    <img src={indivPuppies.imageUrl}></img>
                    <p>Puppy Name: {indivPuppies.name}</p>
                    <p>Puppy Breed: {indivPuppies.breed}</p>
                </div>
            }) : <div>Puppy server is down, please try later.</div>
        }
        </div>
    </div>
    )
};


ReactDOM.render(<Puppies />, document.getElementById("app"))