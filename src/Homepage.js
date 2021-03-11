import { React, useState, useEffect} from 'react';
import './Homepage.css';

const Homepage = () => {
    const [ userInput, setUserInput ] = useState('')
    const [ coinData, setCoinData ] = useState([])

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${userInput}`)
        .then((response) => {
            if (response.ok) {
            return response.json();
            } else {
            throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => setCoinData(data))
        .catch(error => console.error("FETCH ERROR:", error));
    })

    return (
        <div className='main'>
            {/* <input id="coinName" name="coinName" onChange={setUserInput}></input> */}
            {coinData.map(coin =>{
                return <div>
                    <p key={coin.id}>{coin.id} - <span>{coin.market_data.current_price.usd}</span></p>
                    </div>
            })}
        </div>
    )
}

export default Homepage;