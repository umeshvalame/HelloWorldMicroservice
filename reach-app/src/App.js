import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';

function DisplayData({name, identification}) {

  return (
    <div>
      <nav>
        <Link to="/about">About</Link> <br></br>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>
        {name}
      </h1>
      <h2>
        {identification}
      </h2>
    </div>
  );

}

export function Contact() {
    return (
    <div>
      <nav>
        <table>
          <tr>
            <td><Link to="/">Home</Link></td>
            <td><Link to="/about">About</Link></td>
          </tr>
        </table>
      </nav>
      <h1>
      YOU ARE IN Contact US page
      </h1>
      
    </div>
  );
}

export function About() {
  return (
    <div>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      </nav>
      <h2>
        You are in About US
      </h2>
    </div>
  );
}

export function App() {
const [data,setData] = useState(null);
useEffect(() => {
      fetch('https://api.github.com/users/umeshvalame')
      .then((response) => response.json())
      .then(setData);
},[]);
//if(data) 
  //return <DisplayData name={data.login} identification={data.id} />

  return (
    <div className="App">
      <h1>
      <EmployeeForm />
      </h1>
    </div>
  );
}

export default App;
