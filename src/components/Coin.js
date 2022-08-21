import './coin.scss'
import { useNavigate } from 'react-router-dom';

function Coin({
    icon,
    coinName,
    coinSymbol,
    price,
    marketCap,
    priceChange,
    id,
    handleDetail
    }) {

    const navigate = useNavigate();

    return (
        <div className="coinData" onClick={handleDetail}>
            <div className="name">
                <img className='icon' src={icon} alt={coinName} />
                <p className="coinSymbol">{coinSymbol.toUpperCase()}</p>
                <p className="coinName">{coinName}</p>
            </div>
            

            <p className="price">$ {price.toFixed(2)}</p>

            {priceChange < 0 ? 
            (<p className='priceChange red'>{priceChange.toFixed(2)} %</p>)
            :
            (<p className='priceChange green'>{priceChange.toFixed(2)} %</p>)
            }

            <p className="coinVolume">${marketCap.toLocaleString()}M</p>

            <div className='button'>
                <button
                    className='detail-button'
                    onClick={(e) => {
                        e.stopPropagation()
                        console.log('details')
                        navigate(`/CoinPage/${id}`,
                        {
                            state: {
                                icon,
                                coinName,
                                coinSymbol,
                                price,
                                marketCap,
                                priceChange
                            }
                        }
                        );
                    }}
                >
                    Detail
                </button>
            </div>
            
        </div>
    )
}

export default Coin;