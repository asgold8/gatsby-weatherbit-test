import { useState, useEffect } from "react"
import _ from "lodash"

import weatherbit from "../api/weatherbit"

function useCurrentLocalWeather(position, units) {
  const [weatherData, setWeatherData] = useState(null)
  //const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        //setLoading(true)
        const response = await weatherbit.get("current", {
          params: {
            lat: position.lat,
            lon: position.lon,
            units,
            key: process.env.GATSBY_WEATHERBIT_KEY,
          },
        })
        //console.log(response.data)
        if (response.data) {
          //console.log(response.data.data[0]);
          setWeatherData(response.data.data[0])
        }
      } catch (error) {
        //setLoading(null)
        console.log(error)
      }
    }
    if (!_.isEmpty(position)) {
      fetchWeatherData()
    }
  }, [position, units]) //empty array means trigger update only once in its lifetime

  //console.log(weatherData)
  /*
   array to maintain same syntax as useState above. community convention to use array.
   if you were to add another parameter after lat, it would throw the structure
   of the array off in any component that is using it.
  */
  return [weatherData] //, loading]
}

export default useCurrentLocalWeather
