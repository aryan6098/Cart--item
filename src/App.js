import React from "react";
//import "./App.css";
//import CartItem from './CartItem';
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/app'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
  //   firebase
  //     .firestore()
  //     .collection("products")
  //     .get()
  //     .then(snapshot => {
  //       const products = snapshot.docs.map(doc => {
  //         const data = doc.data();
  //         data["id"] = doc.id;
  //         return data;
  //       });
  //       this.setState({ 
  //         products: products,
  //          loading: false });
  //     });
  // }

  // handleIncreaseQuantity = product => {
  //   const { products } = this.state;
  //   const index = products.indexOf(product);

  //   products[index].qty += 1;

  //   this.setState({
  //     products
  //   });
  this.db
  .collection("products")
  //Querying the data
    //.where('price', '==',900)
    //.where('title', '==','Mouse')
    //.orderBy('price')
  .onSnapshot(snapshot => {
    const products = snapshot.docs.map(doc => {
      const data = doc.data();
      data["id"] = doc.id;
      return data;
    });
    this.setState({ 
      products: products,
      loading: false });
  })
}

handleIncreaseQuantity = product => {
const { products } = this.state;
const index = products.indexOf(product);

// products[index].qty += 1;

// this.setState({
//   products
// });
  const docRef = this.db.collection('products').doc(products[index].id);
  docRef
  .update({
    qty:products[index].qty + 1
  })
  .then(() =>{
    console.log('Updated successfully')
  })
  .catch((error) =>{
    console.log('Error:',error);
  })
  }

  handleDecreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    // products[index].qty -= 1;

    // this.setState({
    //   products
    // });
    const docRef = this.db.collection('products').doc(products[index].id);
  docRef
  .update({
    qty:products[index].qty - 1
  })
  .then(() =>{
    console.log('Updated successfully')
  })
  .catch((error) =>{
    console.log('Error:',error);
  })

  };

  handleDeleteProduct = id => {
    const { products } = this.state;
    // const items = products.filter(product => product.id !== id);

    // this.setState({
    //   products: items
    // });

    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(() =>{
        console.log('Deleted successfully')
      })
      .catch((error) =>{
        console.log('Error:',error);
      })
  };

  getcountOfCartItems = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  };

  getcartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map(product => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return '';
    });

    return cartTotal;
  };

  addProduct = () => {
    this.db 
    .collection('products')
    .add({
      img :'data:image/webp;base64,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',
      price:900,
      qty:3,
      title:'washing Machine'
    })
    .then((docRef) =>{
      console.log('Error: ',docRef);
    })
    .catch((error)=>{
      console.log('Error',error);
    })
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getcountOfCartItems()} />
        {/* <button onClick={this.addProduct} style={{padding:20,fontSize:20}}>Add a product</button> */}
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getcartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
