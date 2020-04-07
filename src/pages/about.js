import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
      Welcome! On the homepage, if you click the "Get Current Local Weather",
      and click "Allow" when prompted for access to your location, the app will
      show you the current weather in your area.
    </p>
    <p>
      This demo uses React JS built with Gatsby. Weather is pulled from the
      Weatherbit API. This project is developed entirely within CodeSandbox!
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
