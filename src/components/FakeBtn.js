import React from 'react'

const FakeBtn = ({handleFakeBtn}) => {
  return (
  <React.Fragment>
    <div className='column has-text-centered'>
      <a onClick={handleFakeBtn} className='button is-danger is-large is-fullwidth'>Fake</a>
    </div>
  </React.Fragment>
  )
}

export default FakeBtn
