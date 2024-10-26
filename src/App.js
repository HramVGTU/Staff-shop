import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import './index.css';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Стул",
          img: "chair.jpg",
          desc: "Черный, минималистичный стул",
          category: "chairs",
          price: "29.99"
        },
        {
          id: 2,
          title: "Стул",
          img: "chair.jpg",
          desc: "Черный, минималистичный стул",
          category: "chairs",
          price: "29.99"
        },
        {
          id: 3,
          title: "Стул",
          img: "chair.jpg",
          desc: "Черный, минималистичный стул",
          category: "chairs",
          price: "29.99"
        },
        {
          id: 4,
          title: "Стул",
          img: "chair.jpg",
          desc: "Черный, минималистичный стул",
          category: "chairs",
          price: "29.99"
        },
        {
          id: 5,
          title: "Стул",
          img: "chair.jpg",
          desc: "Черный, минималистичный стул",
          category: "chairs",
          price: "29.99"
        },
        {
          id: 6,
          title: "Стул",
          img: "chair.jpg",
          desc: "Черный, минималистичный стул",
          category: "chairs",
          price: "29.99"
        }
      ]
    };
    this.addToOrder = this.addToOrder.bind(this)
    this.delteOrder = this.delteOrder.bind(this)
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders =  {this.state.orders} onDelete = {this.delteOrder}/>
        <Items items={this.state.items} onAdd = {this.addToOrder} />
        <Footer />
      </div>
    );
  }

  delteOrder(id){
    this.setState({orders: this.state.orders.filter( el =>  el.id !== id)})
  }

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id){
        isInArray = true;
      }
    })
    if(!isInArray){
      this.setState({orders: [...this.state.orders, item]})
    }
  }
}

export default App;