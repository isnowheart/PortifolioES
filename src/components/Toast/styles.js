import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  border-radius: 10px;
  padding: 10px;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ErrorContainer = styled(Container).attrs({
  className: 'bg-error',
})``

export const SuccessContainer = styled(Container).attrs({
  className: 'bg-success',
})``

export const InfoContainer = styled(Container).attrs({
  className: 'bg-secondary',
})``

export const CloseButton = styled.i.attrs({
  className: 'fas fa-times',
  role: 'button',
})`
  font-size: 12px;
  cursor: pointer;
`

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  i{
    margin-right: 5px;
  }
  span{
    font-size: 15px;
  }
`
