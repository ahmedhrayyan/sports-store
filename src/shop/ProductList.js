import React, { Component } from "React";

export class ProductList extends Component {
  render() {
    if (!this.props.products || this.props.length === 0) {
      return <h5 className="p-2">No Products</h5>;
    }
    return this.props.products.map(product => {
      return (
        <div className="card m-1 p-1 bg-light" key={product.id}>
          <h4>
            {product.name}
            <span className="badge badge-pill badge-primary float-right">
              ${product.price.toFixed(2)}
            </span>
          </h4>
          <div className="card-text bg-white p-1">{product.description}</div>
        </div>
      );
    });
  }
}
