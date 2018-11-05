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
    <h1>Learn to design and code React apps</h1>
    <p>This is a playground for me to try my react stuff</p>
    <Link to="/page-2/">Go to page 2 now ok</Link>
  </div>
  </Layout>
)

export default IndexPage
