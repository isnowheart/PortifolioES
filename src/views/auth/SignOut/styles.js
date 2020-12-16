import styled from 'styled-components'

import bgLogin from '@/assets/bg-login.jpg'

export const Container = styled.div.attrs({
  className: 'img-container',
})``

export const Img = styled.img.attrs({
  className: 'img',
  src: bgLogin,
  alt: 'Background',
})``

export const Box = styled.div.attrs({
  className: 'box',
})`
  display: flex;
  flex-direction: column;
`

export const SignOutTitle = styled.h1.attrs({
  className: 'text-primary',
})``
