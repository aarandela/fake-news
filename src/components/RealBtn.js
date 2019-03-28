import React from 'react'

const RealBtn = ({handleRealBtn}) => {
  return (
    <React.Fragment>
      <div className='column has-text-centered'>
        <a onClick={handleRealBtn} className='button is-info is-large is-fullwidth'>Real News</a>
      </div>
    </React.Fragment>
  )
}

export default RealBtn
