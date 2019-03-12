import axios from 'axios'

export function loadSubreddit () {
  return (dispatch) => {
    return axios.get('https://www.reddit.com/r/TheOnion+nottheonion.json')
      .then((response) => {
        console.log('in load subreddit', response)
        response.data.data.children.map((data, index) => {
          console.log(data)
          dispatch(title (data.title))
        })
       
      })
  }
}

export function title (title) {
  return {
    type: 'GET_TITLE',
    title
  }
}