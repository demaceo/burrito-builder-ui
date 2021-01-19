import React, { Component } from 'react';
import './App.css';
import {getOrders, makeOrder} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
    };
  }

  submitOrder = (name, ingredients) => {
        const newOrder = {
          name,
          ingredients,
        };
        makeOrder(newOrder)
        this.setState({ orders: [...this.state.orders, newOrder] });
  }

  componentDidMount() {
    getOrders()
      .then((response) => this.setState({ orders: response.orders }))
      .catch((err) => console.error("Error fetching:", err));
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm />
        </header>
        <Orders orders={this.state.orders} />
      </main>
    );
  }
}


export default App;
