import axios from 'axios'
import { useState } from 'react'

const App = () => {
    const [data, setdata] = useState({})
    const [location, setlocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6cb741cf36fe454f9f3d81356a77f976`

    const searchlocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setdata(response.data)
                console.log(response.data)
            })
            setlocation('')
        }
    }
    return (
        <div className="App">
            <div className="search">
                <input
                    value={location}
                    onChange={event => setlocation(event.target.value)}
                    onKeyPress={searchlocation}
                    placeholder='enter location'
                    type="text" />


            </div>
            <div className="container">
                <div className="top">
                    <div className="location"></div>
                    <p>{data.name}</p>
                </div>
                <div className="temp">
                    {data.main ? <h1>{data.main.temp.toFixed()}`C</h1> : null}
                    {/* <h1>{data.main.temp}</h1> */}
                </div>
                <div className="description">
                    {data.weather ? <p>{data.weather[0].main}</p> : null}

                    <p>Clouds</p>
                </div>

                {data.name != undefined &&
                    <div className="bottom">
                        <div className="feels">
                            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}`C</p> : null}
                            <p>feels like</p>
                        </div>
                        <div className="humidity">
                            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}

                            <p>humidity</p>
                        </div>
                        <div className="wind">
                            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}

                            <p>wind speed</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}



export default App;