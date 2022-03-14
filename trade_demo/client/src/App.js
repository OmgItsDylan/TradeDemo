import React, {useEffect, useState} from 'react'

function App() {


    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        const interval = setInterval(() => {
            fetch("/api").then(
                response => response.json()
            ).then(
                data => {
                    setBackendData(data)
                }
            )
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {(typeof backendData.btc === 'undefined') ? (
                <p> Loading ... </p>
            ): (
                <p>
                    BTC highest price {backendData.btc[0]} EUR<br></br>
                    BTC lowest price {backendData.btc[1]} EUR<br></br>
                    BTC current best bid (buy) price {backendData.btc[2]} EUR <br></br>
                    BTC current best ask (sell) price {backendData.btc[3]} EUR <br></br>

                    ETH highest price {backendData.eth[0]} EUR<br></br>
                    ETH lowest price {backendData.eth[1]} EUR<br></br>
                    ETH current best bid (buy) price {backendData.eth[2]} EUR<br></br>
                    ETH current best ask (sell) price {backendData.eth[3]} EUR<br></br>
                </p>
            )}
        </div>
    )
}

export default App