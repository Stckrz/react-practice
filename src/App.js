import './App.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  const age = 17;
  return (

    <div className="App">
      <ShowComponent />
      <StatePlay />
    </div>
  );
}

const User = (props) => {
  return (
    <div className="content">
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

const Job = (props) => {
  return (
    <div className="content">
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
      <br />
    </div>
  )
};

const ColorPlay = (props) => {
  return (
    <div className="inline-stuff">
      {props.age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
    </div>
  )
};

function ShowComponent() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <button onClick={() => setIsShown(!isShown)}>Click</button>
      {isShown && (
          <BasicExample />
      )}
    </div>
  )
}




function StatePlay() {
  const [addValue, setAddValue] = useState(1);
  const [multiplyValue, setMultiplyValue] = useState(1);

  function doStuff() {
    setAddValue(addValue + 1);
    setMultiplyValue(multiplyValue * 2);
  }

  return (
    <div className="content-wrapper">
      <div className="content">
        <h1>Add one: ({addValue})! <br /> Multiply by two:({multiplyValue})!</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => doStuff()}
        >Increment</button>
      </div>
    </div >
  )
}










function BasicExample() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}




















export default App;
