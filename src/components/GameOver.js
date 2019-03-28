import React from 'react'

const Modal = ({ handleTryAgain, endMemes }) => {
  return (
    <React.Fragment>
      <div className='modal is-active' >
      <div className='modal-background' />
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>FAILED</p>
        </header>
        <section className='modal-card-body'>
          MEME here
        </section>
        <footer className='modal-card-foot'>
          <button onClick={handleTryAgain} className='button is-success'>Try Again!</button>
        </footer>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Modal
