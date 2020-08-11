import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Employee</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            Employees list
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;