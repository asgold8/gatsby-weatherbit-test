import { useState, useEffect } from "react"

export default () => {
  const [pos, setPos] = useState({})
  const [errorMsg, setErrorMsg] = useState("")

  const setCoords = position => {
    setPos({ lat: position.coords.latitude, lon: position.coords.longitude })
  }

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setCoords(position),
      err => setErrorMsg(err.message)
    )
  }, []) //empty array means trigger update only once in its lifetime

  /*
   array to maintain same syntax as useState above. community convention to use array.
   if you were to change the order of the params, it would throw the structure
   of the array off in any component that is using it.
  */
  return [pos, errorMsg]
}
