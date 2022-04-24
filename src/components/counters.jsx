import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // console.log('Counters - Rendered');
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;
    return (
      <div className="container">
        <div class="row"></div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
