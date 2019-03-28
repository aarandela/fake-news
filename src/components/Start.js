import React from 'react'

const Modal = ({start, memes}) => {
  return (
    <React.Fragment>
      <div className='modal is-active' >
      <div className='modal-background' />
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>Can you correctly guess 10 in a row?</p>
        </header>
        <section className='modal-card-body'>
          {memes} MEME here
        </section>
        <footer className='modal-card-foot'>
          <button onClick={start} className='button is-success'>Lets go!</button>
        </footer>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Modal
