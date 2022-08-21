import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

import './coinPage.scss'

function CoinDetail() {

    const {id} = useParams();
    const [coin, setCoin] = useState(null);
    
    useEffect(() => {
        Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(
            (response) => {
              setCoin(response.data);
            }
        );
    }, [id])

    if(coin){
        return (
            <div className="container">
                <div className="details">
                    <div className="coin-name">{coin.name}</div>
                    <img className='icon-img' src={coin.image.large} alt='Icon' />
                    

                    <div className="coinPage-data">
                        <div className="coin-row">
                            <p className='tittle'>Symbol:</p>
                            <p className="symbol">{coin.symbol}</p> 
                        </div>

                        <div className="coin-row">
                            <p className='tittle'>Price Current:</p>
                            <p className="price">{coin.market_data.current_price.usd.toLocaleString()}</p> 
                        </div>

                        <div className="coin-row">
                            <p className='tittle'>Market Cap:</p>
                            <p className="market-cap">${coin.market_data.market_cap.usd.toLocaleString()}</p> 
                        </div>

                        <div className="coin-row">
                            <p className='tittle'>Market Cap:</p>
                            <p className="market-cap">${coin.market_data.total_volume.usd.toLocaleString()}</p> 
                        </div>
                    </div>

                    <Link to="/">
                        <button className="btn">GO BACK</button>
                    </Link>
                    
                </div>

                
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}

export default CoinDetail;