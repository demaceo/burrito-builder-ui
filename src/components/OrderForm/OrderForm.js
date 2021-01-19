import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super();
    // this.props = props;
    this.state = {
      name: " ",
      ingredients: [],
    };
  }
  handleNameChange = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  }

  handleIngredientChange = e => {
    e.preventDefault();
    console.log(this.state.ingredients);
    this.setState({
      ingredients: [e.target.name, ...this.state.ingredients],
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button
          key={ingredient}
          name={ingredient}
          onClick={(e) => this.handleIngredientChange(e)}
        >
          {ingredient}
        </button>
      );
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
