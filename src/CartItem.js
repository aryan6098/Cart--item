import React from 'react';

class CartItem extends React.Component {
    constructor()
    {
        super();
        this.state = {
            price: 999,
            title : 'Mobile Phone',
            qty : 1,
            img : ''
        }
    }
  render () {
      const {title,price,qty} = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price}</div>
          <div style={ { color: '#777' } }>Qty : {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="increase" className="action-icons" src="https://www.flaticon.com/premium-icon/icons/svg/3114/3114793.svg"></img>
            <img alt="decrease" className="action-icons" src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"></img>
            <img alt="delete" className="action-icons" src="https://www.flaticon.com/premium-icon/icons/svg/2907/2907762.svg"></img>
          </div>
        </div>
      </div>
    );
  }
}


const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;