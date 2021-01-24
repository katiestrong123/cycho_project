const baseURL = 'http://localhost:3000/api/cychos/';
 
export const getCychos = () => {
    return fetch(baseURL)
    .then(res => res.json())
}


//I think this "update " would be for updating "liked" aspect in murals so would be the same function to update rating.

//rating, like uber would be an average out of 5 stars.
export const updateDbCycho = (cycho) => {
    return fetch(baseURL + cycho._id, {
        method: 'POST',
        body: JSON.stringify(cycho),
        headers: { 
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json());
}