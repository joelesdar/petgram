import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px;
  margin-bottom: 20px;
`
export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  padding: 8px 0;
  text-align: center;
  color: var(--pink);
`

export const Logo = styled.div`
  display: flex;
  margin: 0 auto;
  width: 150px;
  padding: 40px 0;
`

export const Input = styled.input`
  border: 1px solid var(--green-blue);
  border-radius: 4px;
  margin-bottom: 16px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: .5;
  }
`

export const Error = styled.span`
  background: var(--pink);
  color: #fff;
  width: 100%;
  display: block;
  font-size: 16px;
  margin-bottom: 20px;
  border: 3px solid var(--orange);
  border-radius: 4px;
  height: 32px;
  text-align: center;
`
