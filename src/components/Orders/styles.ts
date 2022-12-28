import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;
  gap: 32px;
`
export const Board = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`
export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    height: 128px;
    gap: 4px;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 12px;
      color: #666;
    }

    & + button {
      margin-top: 24px;
    }
  }
`
