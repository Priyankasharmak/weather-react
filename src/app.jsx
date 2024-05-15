import axios from 'axios'

const App = ()=>{

    const url='https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=6cb741cf36fe454f9f3d81356a77f976'
    return (
        <div className="App">
            <div className="container">
                <div className="top">
                <div className="location"></div>
                <p>Dallas</p>
                </div>
                <div className="temp">
                    <h1>60`C</h1>
                </div>
                <div className="description">
                    <p>Clouds</p>
                </div>
                
                <div className="bottom"> 
                <div className="feels">
                  <p className='bold'> 65`C</p>
                  <p>feels like</p>
                </div>
                <div className="humidity">
                    <p className='bold'>20%</p>
                    <p>humidity</p>
                </div>
                <div className="wind">
                    <p className='bold'>12 MPH</p>

                    <p>wind speed</p>
                </div>
                </div>
            </div>

        </div>
    )
}

 

export default App;