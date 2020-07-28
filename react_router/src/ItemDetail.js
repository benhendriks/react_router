import React, {useState, useEffect} from 'react';
import './App.css';

function ItemDetail({ match }) {

  useEffect(() => {
    fetchItem();
    console.log(match);
  },[]);

  const [item, steItem] = useSate({
    images: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      'API${match.params.id}'
    );
    const item = await fetchItem.json();
    steItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src="{item.images.transparent}" alt="" />
    </div>
  );
}

export default ItemDetail;
