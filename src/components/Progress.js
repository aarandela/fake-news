import React from 'react'

const Progress = ({count}) => {
  return (
    <React.Fragment>
       <div className='section is-centered is-mobile box' style={{ padding: '10px 0 10px 0' }}>
          <div className='columns has-text-centered'> 
           <div className='column'>
             <h1 className='title is-4'>Number Correct in a row! : <span className='title is-1'>{count}</span></h1>
           </div>
         </div>
         </div>
    </React.Fragment>
  )
}

export default Progress
