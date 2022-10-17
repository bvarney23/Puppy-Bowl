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
        <h1>Hello Puppies!</h1>
        <p>Welcome to the 2022 Puppy Bowl! Down below you will see a list of our contestants for this years matchup. This years field is filled with a diverse group of competitors that are looking to take home the big prize! Let's get this pawty started!</p>

        <div id="puppy-container">
        {
            puppies && puppies.length ? puppies.map((indivPuppies, idx) => {
                console.log("Puppies", indivPuppies)
                return <div key={idx}>
                    <div id="puppy-information">
                        <p id="puppy-name">Puppy Name: {indivPuppies.name}</p>
                        <img src={indivPuppies.imageUrl}></img>
                        <p id="puppy-breed">Breed: {indivPuppies.breed}</p>
                    </div>
                </div>
            }) : <div>Puppy server is down, please try later.</div>
        }
        </div>
    </div>
    )
};


ReactDOM.render(<Puppies />, document.getElementById("app"))