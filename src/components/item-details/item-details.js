import React, { Component } from "react";
import "./item-details.css";
import ErrorBoundry from "../error-boundry";


const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{`${label}: `}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null,
    loading: true,
  };

  componentDidMount() {
    this.updateItem();
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => {
      this.setState({ item, image: getImageUrl(item), loading: false });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true });
      this.updateItem();
    }
  }

  render() {
    const { item, image } = this.state;

    if (!item) {
      return <span className="person-select">Select item from a list</span>;
    }

    return (
      <ErrorBoundry>
        <div className="person-details card">
          <img className="person-image" src={image} />

          <div>
            <h3>{item.name}</h3>
            <ul className="list-group">
              {React.Children.map(this.props.children, (child) =>{
                return React.cloneElement(child, {item}); 
              })}
              </ul>
          </div>
        </div>
      </ErrorBoundry>
    );
  }
}
