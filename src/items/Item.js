import React from "react";


export default function Item({ item }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={item.complete} />
        {item.name}
      </label>
    </div>
  );
}
