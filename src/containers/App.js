import React, { Component } from 'react'
import Title from '../components/Title'
import Image from '../components/Image'
import RealBtn from '../components/RealBtn'
import FakeBtn from '../components/FakeBtn'
import ProgressBar from '../components/ProgressBar'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    return (
      <div className='section'>

        {/* title */}
        <div class='card'>
          <div class='card-image'>
            <figure class='image is-2by1'>
              <img src='https://b.thumbs.redditmedia.com/gTWsuyvxaqlLVkPyuBe0DcRGGSFplIyYr7IGGNOoGwA.jpg' />
            </figure>
          </div>
          <div class='card-content has-text-centered'>
            <div class='content'>
            Man tries to steal car with a gun, runs away after realizing it's a stick shift

              <br />
              <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>

            </div>
          </div>
        </div>

        {/* time */}
        <div className='section' style={{ padding: '10px 0 10px 0' }}>
          <div class='columns is-mobile is-centered'>
            <div class='column is-half'>
              <p class='bd-notification is-primary has-text-centered'>
                Time here
              </p>
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className='section' style={{ padding: '10px 0 10px 0' }}>
          <div class='columns is-centered'>
            <div class='column' />
            <div class='column has-text-centered'>
              <a class='button is-info is-large is-fullwidth'>Real</a>
            </div>
            <div class='column has-text-centered'>
              <a class='button is-danger is-large is-fullwidth'>Fake</a>
            </div>
            <div class='column' />
          </div>
        </div>

        {/* progress bar */}
        <div className='section is-centered' style={{ padding: '10px 0 10px 0' }}>
          <div className='columns'>
            <div className='column'>
              square
            </div>
            <div className='column'>
              square
            </div>
            <div className='column'>
              square
            </div>
            <div className='column'>
              square
            </div>
            <div className='column'>
              square
            </div>
            <div className='column'>
              square
            </div>

          </div>

        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
