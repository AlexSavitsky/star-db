import React from "react";
import PropTypes from "prop-types";
import "./item-list.css";

const ItemList = (props) => {
  const { data, onItemSelected, children: renderItem } = props;

  ItemList.defaultProps = {
    onItemSelected: () => {},
  };

  ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired,
  };

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
