import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CurrentLocalWeather from "../components/currentLocalWeather"

const IndexPage = () => {
  const [localCurrentWeather, setLocalCurrentWeather] = React.useState(false)

  function renderLocalCurrentWeather() {
    let content
    if (localCurrentWeather) {
      content = <CurrentLocalWeather />
    } else {
      content = (
        <button
          onClick={() => {
            setLocalCurrentWeather(true)
          }}
        >
          Get Current Local Weather
        </button>
      )
    }
    return content
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <div>{renderLocalCurrentWeather()}</div>
      <br />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
