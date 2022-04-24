import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          className="btn btn-primary m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button
          className="btn btn-secondary m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          x
        </button>
      </div>
    );
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  getBadgeClass() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
