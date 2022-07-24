import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animations'

export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  position: fixed;
  z-index: 1000;
`

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    color: #000;

    &:after {
      ${fadeIn({ time: '.4s' })};
      content: '•';
      position: absolute;
      bottom: 0;
      font-size: 28px;
      line-height: 20px;
    }
  }
`
