import styled from 'styled-components'

export const Container = styled.header`
  background: #d73035;
  height: 198px;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

.page-details {
  h1 {
    color: #fff;
    font-size: 32px;
  }

  h2 {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    margin-top: 8px;
  }
}
`
