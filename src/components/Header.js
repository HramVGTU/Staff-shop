import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order'

const showOrders = (props) => {
  return(
    <div>
      {props.orders.map(el => (
        <Order onDelete = {props.onDelete} key={el.id} item={el}/>
      ))}
    </div>
  )
}

const showNothing = () => {
  return(
    <div className='empty'>В корзине пока нет товаров</div>
  )
}

export default function Header(props) {
  let [cardOpen, setCardOpen] = useState(false)

  return (
    <header className="header">
        <div>
            <span className='logo'>Staff</span>
            <ul className='nav'>
                <li>О нас</li>
                <li>Контакты</li>
                <li>Личный кабинет</li>
            </ul>
            <FaShoppingCart onClick={() => setCardOpen( cardOpen = !cardOpen)} className={`shop-card-button ${cardOpen && "active"}`}/>
            {cardOpen && (
              <div className='shop-card'>
                {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
