import './Modal.scss'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Modal = ({modalActive, children, closeModal}) => {
  return (
    <div className={classnames('modal', {'is-active': modalActive})}>
        <div className='modal-background' onClick={closeModal}></div>
        <div className='modal-card'>
            <section className='modal-card-body'>
                {modalActive ? children : ''}
            </section>
        </div>
    </div>
  )
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    modalActive: PropTypes.bool.isRequired,
    closeModal: PropTypes.func
}

Modal.defaultProps = {
    closeModal: () => {}
}

export default Modal