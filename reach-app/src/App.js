import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';

function DisplayAboutData(full_name) {
  return (
    <div>
      <nav>
        <table border={1}>
          <tr>
            <td><Link to="/">Home</Link></td> <td> / </td>
            <td><Link to="/contact">Contact</Link></td>
          </tr>
        </table>
      </nav>
      <h3>
        User Rank : {full_name}
      </h3>
    </div>
    
  );
}

function DisplayData({profile_url, identification, updated_at}) {

  return (
    <div>
      <nav>
      <table border={1}>
          <tr>
            <td>
              <Link to="/about">About</Link> </td><td> / </td>
              <td><Link to="/contact">Contact</Link></td>
            </tr>
      </table>      
      </nav>
      <h3>
        GitHub repository URL : 
        <b>{profile_url}</b>
      </h3>
      <h3>
        User Rank : {identification}
      </h3>
      <h3>
        Updated at : {updated_at}
      </h3>
    </div>
  );

}

export function Contact() {
    return (
    <div>
      <nav>
        <table border={1}>
          <tr>
            <td><Link to="/">Home</Link></td> <td> / </td>
            <td><Link to="/about">About</Link></td>
          </tr>
        </table>
      </nav>
      <h3>
      You are in Contact us page
      </h3>
    </div>
  );
}

export function About() {

    const [data,setData] = useState(null);
    useEffect(() => {
        fetch('https://api.github.com/users/umeshvalame/subscriptions')
        .then((response) => response.json())
        .then(setData);
    },[]);
    if(data) 
      return (
        <div>
          <nav>
            <table border={1}>
              <tr>
                <td><Link to="/">Home</Link></td> <td> / </td>
                <td><Link to="/contact">Contact</Link></td>
              </tr>
            </table>
          </nav>
          {data.map((item) => (
            <div key={item.id}> {/* Replace 'id' with the appropriate unique identifier */}
              <p></p>
              <b>Microservice :</b> {item.name}<p>
              <b>Full Name : </b>{item.full_name}</p>
              <p><b>Language : </b>{item.language}</p>
              <p>Above ReactJs RestAPI is hosted on cloud 
               <p></p> User -> ELB -> ECS(instance_type=fargage) -> c1(container task) -> DAX - DyanmoDB</p>
            </div>
          ))}
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
if(data) 
  return <DisplayData profile_url={data.html_url} identification={data.id} updated_at={data.updated_at}/>
}

export default App;
