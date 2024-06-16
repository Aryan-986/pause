// src/ProductDetail.js
import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {
  return (
    <section id="prodetails" className="section-p1">
      <div className="single-pro-image">
        <img src={product.mainImg} alt={product.name} id="MainImg" />
        <div className="small-img-group">
          {product.smallImg.map((img, index) => (
            <div className="small-img-col" key={index}>
              <img src={img} alt={`${product.name} ${index + 1}`} className="small-img" />
            </div>
          ))}
        </div>
      </div>
      <div className="single-pro-details">
        <h6>Home / Attar and Perfumes</h6>
        <h4>{product.name}</h4>
        <h2>Rs {product.price}</h2>
        <select>
          <option>Select Option</option>
          <option>Small 25ml</option>
          <option>Medium 50ml</option>
          <option>Large 100ml</option>
          <option>Extra Large 150ml</option>
        </select>
        <input type="number" defaultValue="1" />
        <button className="normal">Add to cart</button>
        <h4>Product Details</h4>
        <span>{product.description}</span>
      </div>
    </section>
  );
};

export default ProductDetail;
