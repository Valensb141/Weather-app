import axios from 'axios'
import { useEffect } from 'react'

function App() {

  //const url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=YG62GNRYM6CC9HTBJWWH3NW9G`


  return (
    <>
     <div className="app">

      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60ºF</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>60ºF</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12MPH
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
