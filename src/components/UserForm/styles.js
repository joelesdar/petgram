import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px;
`
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  padding: 8px 0;
  text-align: center;
  color: var(--purple);
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
`

export const Button = styled.button`
  background: -prefix-linear-gradient(left, var(--main-blue), var(--green-blue));
  background: var(--main-blue);
  border-radius: 4px;
  color: #fff;
  height: 32px;
  width: 100%;
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
`
