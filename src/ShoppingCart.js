import React from 'react';
import './ShoppingCart.css';
import ShoppingCartTotal from './ShoppingCartTotal';
import { USCurrencyFormat } from './data/features_data.js';

class ShoppingCart extends React.Component {

    render() {

        const shoppingCartItems = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
      
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
        });

        return ( 
            <section className="main__summary">
                <h2>Your cart</h2>
                {shoppingCartItems}
                <ShoppingCartTotal selected={this.props.selected} />
            </section>
        );
    }
}

export default ShoppingCart;