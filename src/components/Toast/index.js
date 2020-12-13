/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import {
 ErrorContainer, MessageContainer, CloseButton, InfoContainer, SuccessContainer,
} from './styles'

function ErrorComponent({ message, close }) {
  return (
    <ErrorContainer>
      <MessageContainer>
        <i className="fas fa-exclamation-circle" />
        <span>{message}</span>
      </MessageContainer>
      <CloseButton onClick={close} />
    </ErrorContainer>
  )
}

function InfoComponent({ message, close }) {
  return (
    <InfoContainer>
      <MessageContainer>
        <i className="fas fa-info-circle" />
        <span>{message}</span>
      </MessageContainer>
      <CloseButton onClick={close} />
    </InfoContainer>
  )
}

function SuccessComponent({ message, close }) {
  return (
    <SuccessContainer>
      <MessageContainer>
        <i className="fas fa-check-circle" />
        <span>{message}</span>
      </MessageContainer>
      <CloseButton onClick={close} />
    </SuccessContainer>
  )
}

function Toast({
 style, message, close, options,
}) {
  return (
    <div style={style}>
      {options.type === 'error' ? <ErrorComponent message={message} close={close} /> : null}
      {options.type === 'info' ? <InfoComponent message={message} close={close} /> : null}
      {options.type === 'success' ? <SuccessComponent message={message} close={close} /> : null}
    </div>
  )
}

Toast.propTypes = {
  style: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  options: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
}

const childrenProps = {
  message: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
}

ErrorComponent.propTypes = childrenProps
InfoComponent.propTypes = childrenProps
SuccessComponent.propTypes = childrenProps

export default Toast
