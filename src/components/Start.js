import React from 'react'

const Modal = ({start, memes}) => {
  return (

    <React.Fragment>
      <div class="modal is-active">
        <div class="modal-background"></div>
        <header className='modal-card-head'>
          <p className='modal-card-title'>REAL OR FAKE NEWS</p>
        </header>
        <header className='modal-card-head'>
          <p className='modal-card-title'>Can you correctly guess 10 in a row?</p>
        </header>
          <div class="modal-content">
            <p class="image">
              <img src={memes} alt=""/>
            </p>
        </div>
        <footer>
          <button onClick={start} className='button is-success'>LET'S GO!</button>
        </footer>
      </div>
    </React.Fragment>
   
  )
}

export default Modal
