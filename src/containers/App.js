import React, { Component } from 'react'
// import Title from '../components/Title'
// import Image from '../components/Image'
// import RealBtn from '../components/RealBtn'
// import FakeBtn from '../components/FakeBtn'
// import ProgressBar from '../components/ProgressBar'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts: [],
       title: '',
       image: '',
       subreddit: '',
       count: 0
    }
  }
  
  handleFakeBtn (evt) {
    if (this.state.subreddit === 'TheOnion') {
      this.setState({ count: this.state.count++ })
    }
    let posts = this.state.posts
    let rand = posts[Math.floor(Math.random() * posts.length )]
    this.setState({
      title: rand.data.title,
      image: `${rand.data.thumbnail}`,
      subreddit: rand.data.subreddit
    })
  }

  handleRealBtn (evt) {

  }

  componentDidMount () {
    axios.get('https://www.reddit.com/r/TheOnion+nottheonion.json')
      .then(response => {
        console.log('response', response)
        let myArr = response.data.data.children
        let rand = myArr[Math.floor(Math.random() * myArr.length )]
        console.log('rand', rand)
        this.setState({
          title: rand.data.title,
          posts: myArr,
          image: `${rand.data.thumbnail}`,
          subreddit: rand.data.subreddit
        })
      })
  }

  render () {
    console.log('in render', this.props)
    console.log('state', this.state)
    return (
      <div className='container is-mobile'>

        {/* title */}
     
          <div className="box">
            <article className="tile is-child notification">
              <p className="title has-text-centered">{this.state.title}</p>
              <div className='container has-text-centered'>  
              <img src={this.state.image}/>
              </div>
            </article>
         </div>
         

        {/* time */}
        <div className='section' style={{ padding: '10px 0 10px 0' }}>
          <div className='columns is-mobile is-centered'>
            <div className='column is-half'>
              <p className='bd-notification is-primary has-text-centered'>
                Time here
              </p>
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className='section' style={{ padding: '10px 0 10px 0' }}>
          <div className='columns is-centered'>
            <div className='column' />
            <div className='column has-text-centered'>
              <a onClick={this.handleRealBtn} className='button is-info is-large is-fullwidth'>Real</a>
            </div>
            <div className='column has-text-centered'>
              <a onClick={this.handleFakeBtn} className='button is-danger is-large is-fullwidth'>Fake</a>
            </div>
            <div className='column' />
          </div>
        </div>

        {/* progress bar */}
        <div className='section is-centered is-mobile box' style={{ padding: '10px 0 10px 0' }}>
          <div className='columns is-mobile'>
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
  title: state
})

const mapDispatchToProps = (dispatch) => ({
  loadSubreddit: (dispatch) => {return axios.get('https://www.reddit.com/r/TheOnion+nottheonion.json')
      .then((response) => {
        console.log('in load subreddit', response)
        dispatch({
          type: 'GET_TITLE',
          response
        })})
}})

export default connect(mapStateToProps, mapDispatchToProps)(App)
