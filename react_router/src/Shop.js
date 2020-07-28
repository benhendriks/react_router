import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems();
  },[]);

  const [items, steItems] = useSate([]);

  const fetchItems = async () => {
    const data = await fetch(
      'react'
    );
    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  };

  return (
    <div className="App">
      {items.map(item => (
        <h1 key={item.itemid}>
          <Link to={'/shop/${item.itemid}'}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
