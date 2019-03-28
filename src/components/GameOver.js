import React from 'react'

const Modal = ({ handleTryAgain, endMemes }) => {
  return (
    <React.Fragment>
      <div class="modal is-active">
        <div class="modal-background"></div>
          <div class="modal-content">
            <p class="image is-4by3">
              <img src={endMemes} alt=""/>
            </p>
        </div>
        <footer>
          <button onClick={handleTryAgain} className='button is-danger'>Try Again!</button>
        </footer>
      </div>
    </React.Fragment>
  )
}

export default Modal
