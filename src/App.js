import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react'
import Form from './Form'

function App() {
  // empty team array
  const [team, setTeam] = useState([])
  // current state of fields
  const [values, setValues] = useState({name: "", email: "", role: ""})
  

  // on submit update team array with fields in values
  const onSubmit = () => {
    setTeam([values, ...team])
    setValues({name: "", email: "", role: ""})
  }
  // on change of fields update name and values of form fields
  const onChange = (name, value) => {
    setValues({...values, [name]:value})
  }


  return (
    <div className="App">
      <h1>Team Builder</h1>

      <div>
        <Form
          values={values}
          change={onChange}
          submit={onSubmit}
        />
      </div>

      {team.map((team, idx) => {
        return (
          <div key={idx}>
            {team.name}, {team.email}, {team.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;
