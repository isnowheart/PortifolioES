import styled from 'styled-components'

export const Container = styled.div.attrs({
  className: 'bg-dark',
})`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div.attrs({
  className: 'box',
})`
  display: flex;
  flex-direction: column;
`

export const SessionTitle = styled.h1.attrs({
  className: 'text-primary',
})``
