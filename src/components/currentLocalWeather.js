import React from "react"

import Spinner from "./spinner"
import useLocation from "../hooks/useLocation"
import useWeather from "../hooks/useCurrentLocalWeather"

const CurrentLocalWeather = () => {
  const [pos, errorMsg] = useLocation()
  const units = "I"
  const [weather] = useWeather(pos, units)

  let content
  let weatherDesc
  let city
  let temp

  if (errorMsg) {
    content = <div>Error: {errorMsg}</div>
  } else if (pos.lat) {
    content = pos.lat + "," + pos.lon
    if (weather) {
      city = weather.city_name
      temp = weather.temp + "°" + (units === "I" ? "F" : "C")
      weatherDesc = weather.weather.description
      content = null
    } else {
      content = <Spinner message="Weather loading..." />
    }
  } else {
    content = <Spinner message="Please accept location request." />
  }

  return (
    <div>
      <div>{city}</div>
      <div>{weatherDesc}</div>
      <div>{temp}</div>
      <div>{content}</div>
      {}
    </div>
  )
}

export default CurrentLocalWeather
