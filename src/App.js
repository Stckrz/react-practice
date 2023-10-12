import './App.css';

function App() {
  const age = 17;
  const isGreen = false;
  return (


    <div className="wtf">
      <Basicexample />

      <div className="App">

        <header className='App-header'>
          <div class='alert alert-primary' role='alert'>
            <p style={{ display: "none" }} className='d-block'>
              Bootstrap is now successfully installed 😃
            </p>
            <p className='d-none'>
              Bootstrap is not installed if you can see this 😢
            </p>
          </div>
        </header>



        <div className="content-wrapper">
          <User name="Stckrz" age={32} email="Stckrz@stckrz.com" />
          <Job salary="90000" position="Senior SDE" company="Amazon" />
        </div>


        <div className="style-stuff">
          <ColorPlay />
        </div>
        <h1 style={{ color: "red", backgroundColor: "black" }}> THIS HAS COLOR</h1>

      </div>
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





const Basicexample = () => {
  return (


    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )


}




















export default App;
