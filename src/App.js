import React, { Component } from 'react'
import Title from './components/Title'
import RealBtn from './components/RealBtn'
import FakeBtn from './components/FakeBtn'
import Progress from './components/Progress'
import Timer from './components/Timer'
import GameOver from './components/GameOver'
import axios from 'axios';
import Start from './components/Start'
import Randomize from 'unique-random'
import StartMeme from './components/StartMemes'
import FailMeme from './components/FailMemes'

class App extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
       posts: [],
       title: '',
       image: '',
       subreddit: '',
       count: 0,
       url: '',
       timer: '',
       gameOver: false,
       start: false,
       startMemes: StartMeme[Math.floor(Math.random() * StartMeme.length )],
       endMemes: FailMeme[Math.floor(Math.random() * FailMeme.length )],
       render: false
    }
    this.handleFakeBtn = this.handleFakeBtn.bind(this)
    this.handleRealBtn = this.handleRealBtn.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleTryAgain = this.handleTryAgain.bind(this)
  }
  
  handleFakeBtn (evt) {
    let randomizer = Randomize(1, 25)
    if (this.state.subreddit === 'TheOnion') {
      this.setState({ count: this.state.count + 1 })
    } else {
      this.setState({ count: 0, gameOver: true })
    }
    let newPost = this.state.posts[randomizer()]
    console.log(randomizer())
    this.setState({
      title: newPost.data.title,
      image: `${newPost.data.thumbnail}`,
      subreddit: newPost.data.subreddit
    })
  }

  handleRealBtn (evt) {
    let randomizer = Randomize(1, 25)
    if (this.state.subreddit === 'nottheonion') {
      this.setState({ count: this.state.count + 1 })
    } else {
      this.setState({ count: 0, gameOver: true  })
    }
    let newPost = this.state.posts[randomizer()]
    console.log(randomizer())
    this.setState({
      title: newPost.data.title,
      image: `${newPost.data.thumbnail}`,
      subreddit: newPost.data.subreddit
    })
  }

  handleStart (evt) {
    let randomizer = Randomize(1, 25)
    console.log(randomizer())
    let myArr = this.state.posts
    let randPost = myArr[randomizer()]
    this.setState({
      start: true,
      title: randPost.data.title,
      image: `${randPost.data.thumbnail}`,
      subreddit: randPost.data.subreddit
    })
  }

  handleTryAgain () {
    window.location.reload(true)
  }

  componentDidMount () {
    axios.get('https://www.reddit.com/r/TheOnion+nottheonion.json')
      .then(response => {
   
        let myArr = response.data.data.children
      
        this.setState({
          posts: myArr,
        
        })
      })
  }


  render () {
    return (
      <React.Fragment>
        {this.state.start ? this.state.gameOver ? <GameOver handleTryAgain={this.handleTryAgain} 
                                                            endMemes={this.state.endMemes} /> 
        : <div className='container is-mobile'>
            <Title image={this.state.image} title={this.state.title} />
              <div className='section' style={{ padding: '10px 0 10px 0' }}>
                <div className='columns is-centered'>
                  <div className='column' />
                    <RealBtn handleRealBtn={this.handleRealBtn} />
                    <FakeBtn handleFakeBtn={this.handleFakeBtn} />
                  <div className='column' />
                </div>
              </div>
            <Progress count={this.state.count} />
        </div> 
        : <Start start={this.handleStart} memes={this.state.startMemes} />}
      </React.Fragment>
    )
  }
}

export default App
