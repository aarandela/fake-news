import React from 'react'

const Title = ({ image, title }) => {
  return (
    <React.Fragment>
    <div className="box">
            <article className="tile is-child notification">
              <p className="title has-text-centered">{title}</p>
              <div className='container has-text-centered'>  
              <img src={image}/>
              </div>
            </article>
         </div>
         
    </React.Fragment>
    )
}

export default Title
