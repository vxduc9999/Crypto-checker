import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import Axios from "axios";
import Coin from './Coin'

// import css
import './home.scss'


function Home() {
    const [isLoading, setIsLoading] = useState(false)
    const [coinSearch, setCoinSearch] = useState('')
    const [coins, setCoins] = useState([])


    useEffect(() => {
      refreshPage()
    }, [])

    const filterList = coins.filter(coin => coin.name.toLowerCase().includes(coinSearch.toLocaleLowerCase()))

    const refreshPage = () => {
      setIsLoading(true)
      Axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then((response) => {
        setIsLoading(false)
        setCoins(response.data)
      })
    }


    const handleSearch = (e) => {
        setCoinSearch(e.target.value)
    }

    const handleDetail = (e) => {
      console.log('ajkwdnkja')
    }

    return (
      <>
        <div className="header">
            <h1 className="title">Popular cryptocurrencies</h1>
            <TextField className="search-box" id="outlined-basic" label="Search Coin Name" variant="outlined" onChange={handleSearch} />
        </div>
        <div className='body'>
           {isLoading && <h1>Data Loading...</h1>}
           {filterList.map((coin) => {
            return (
              <Coin
                key={coin.id}
                id={coin.id}
                icon={coin.image}
                coinName={coin.name}
                coinSymbol={coin.symbol}
                price={coin.current_price}
                marketCap={coin.market_cap}
                priceChange={coin.price_change_percentage_24h}
                handleDetail={handleDetail}
              />
            )
           })}
        </div>
      </>
    );
  }

export default Home;