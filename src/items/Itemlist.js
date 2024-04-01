import React from "react";
import Item from "./Item";

export default function Itemlist({ items }) {
  return items.map((item) => {
    return <Item key={item.id} item={item} />;
  });
}
