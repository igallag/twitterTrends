import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class SupportServices extends React.Component {
  // constructor(props) {
  //   super(props)

  // }

  async componentDidMount() {
    console.log(`I am mounting`)
    /**
     * currently does not fetch a name and it breaks a UTIL
     */
    try {
      const data = await axios.get(
        `https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=1424079763&count=1`,
        {
          headers:
            'Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAOYzFAEAAAAAa0LXm8R%2FoHi9B33vc6M2yB10tM8%3DdqJdBZwWCo6AGp2nBE2ijBok1PPBV9dwRKX3avqC5R6'
        }
      )
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <h1>This is the support services page</h1>
        <div>
          <h2>About</h2>
          <p>This here is where your services are friend</p>
          <ul>
            <li>This is a service</li>
            <li>This is a service also</li>
            <li>This is the</li>
          </ul>
          <h2>Resources</h2>
          <p>This here be links to the resources</p>
        </div>
      </div>
    )
  }
}

export default SupportServices
