import React from 'react'

const Timer = () => {
  return (
   <React.Fragment>
      <div className='section' style={{ padding: '10px 0 10px 0' }}>
        <div className='columns is-mobile is-centered'>
          <div className='column is-half'>
            <p className='bd-notification is-primary has-text-centered'>
              Time here
            </p>
          </div>
        </div>
      </div>
   </React.Fragment>
  )
}

export default Timer
