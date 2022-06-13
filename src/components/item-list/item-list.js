import React from "react";

import "./item-list.css";


const ItemList = (props) => {
  const { data, onItemSelected, children: renderItem } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderItem(item);

    return (
      <li
        className="list-group-item list-group-item-action"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return (
    <div className="item-list">
      <ul className="list-group">{items}</ul>
    </div>
  );
};

export default ItemList;
