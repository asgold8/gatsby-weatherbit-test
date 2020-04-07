import React from "react"
import { Link } from "gatsby"
import { Button } from "semantic-ui-react"

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
        <Button
          primary
          onClick={() => {
            setLocalCurrentWeather(true)
          }}
        >
          Get Current Local Weather
        </Button>
      )
    }
    return content
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1 style={{ fontSize: "20px" }}>Hello</h1>
      <div>{renderLocalCurrentWeather()}</div>
      <br />
      <Link to="/about/">About</Link>
    </Layout>
  )
}

export default IndexPage
