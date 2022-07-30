import styled from 'styled-components'

export const Button = styled.button`
  background: var(--main-blue);
  border-radius: 4px;
  color: #fff;
  height: 32px;
  width: 100%;
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  &[disabled] {
    opacity: .5;
  }
`
