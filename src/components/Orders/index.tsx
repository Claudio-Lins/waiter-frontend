import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import socketIo from 'socket.io-client';
import { Order } from '../../@types/Order';
import { OrdersBoard } from '../../components/OrdersBoard';
import { api } from '../../utils/api';
import { Container } from './styles';

export function Oders() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const socket  = socketIo('http://localhost:3333', {
      transports: ['websocket'],
    })
    socket.on('orders@new', () => {
      api.get('/orders')
        .then(({data}) => {
          setOrders(data)
        })
      toast.info('Novo pedido recebido')
    })
  }, [])

  useEffect(() => {
    api.get('/orders')
      .then(({data}) => {
        setOrders(data)
      })
  }, [])

  const waitingOrders = orders.filter(order => order.status === 'WAITING')
  const inProductionOrders = orders.filter(order => order.status === 'IN_PRODUCTION')
  const doneOrders = orders.filter(order => order.status === 'DONE')

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId))
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderId
        ? {...order, status}
        : order
    )))
  }

  return (
    <Container>
      <OrdersBoard
        icon='⏱️'
        title='Fila de espera'
        orders={waitingOrders}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon='👩‍🍳'
        title='Em preparação'
        orders={inProductionOrders}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon='✅'
        title='Prontos'
        orders={doneOrders}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </Container>
  )
}
