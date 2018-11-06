import React from 'react'
import { Link } from 'gatsby'
import Icon from '../components/Icon'
import Avatar from '../components/avatar'
import Name from '../components/Name'


import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Icon/>
    <Avatar/>
    <Name/>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>REACTSEAN 1</h1>
          <p>Learn to design and code React apps. This is a playground for me to try my react stuff</p>
          <Link to="/page-2/">Go to page 2</Link></div>
      </div>
  </div>
  </Layout>
)

export default IndexPage
