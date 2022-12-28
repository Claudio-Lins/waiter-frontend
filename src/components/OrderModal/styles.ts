import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalBody = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 32px;
  width: 480px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      display: flex;
      background: transparent;
      border: 0;
      cursor: pointer;
      padding: 0;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      color: #333;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-size: 14px;
    opacity: 0.8;
    font-weight: 500;
  }

  .order-itens {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 4px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
      }
      span {
        font-size: 14px;
        color: #666;
      }
    }
  }
}
.total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;

  span {
    font-size: 14px;
    color: #666;
    font-weight: 500;
    opacity: 0.8;
  }
}
`

export const Actions = styled.footer`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  buttom:disable {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .primary {
    display: flex;
    align-items: center;
    background: #333;
    color: #fff;
    border: 0;
    border-radius: 48px;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
    width: 100%;
    justify-content: center;
    gap: 8px;
  }
  .secondary {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: #d73035;
    padding: 12px 24px;
    border: 0;
    width: 100%;
    margin-top: 8px;
    font-weight: bold;
  }
`
