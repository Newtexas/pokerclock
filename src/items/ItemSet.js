import React, { useState, useRef, useEffect } from "react";
import uuid, { stringify, v4 } from "uuid";
import Itemlist from "./Itemlist";

export default function ItemSet() {
  const [items, setItems] = useState([]);
  const itemNameRef = useRef();
  const LOCAL_STORAGE_KEY = 'itemlistkey';

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedItems) setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function ItemHandle(e) {
    const name = itemNameRef.current.value;

    if (name === "") return;
    setItems((prevItems) => {
      return [...prevItems, { id: v4(), name: name, complete: false }];
    });
    itemNameRef.current.value = null;
  }
  return (
    <div>
      <>
        <Itemlist items={items} />
        <input ref={itemNameRef} type="text" />
        <button onClick={ItemHandle}>Item toevoegen</button>
        <button>Item verwijderen</button>
        <div>listed items</div>
      </>
    </div>
  );
}
