import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Array from './components/Array';

function App() {
  const personName = {
    first: 'Ajith',
    last: 'Kumar'
  }
  const nameList = [
    {
      first: 'Naveen',
      last: 'Kumar',
    },
    {
      first: 'Arul',
      last: 'Mozhi',
    },
    {
      first: 'Vignesh',
      last: 'War',
    }
  ]

  const course = [
    {
      Role: 'FrontEnd',
      course: 'ReactJs'
    },
    {
      Role: 'Backend',
      course: 'NodeJs'
    },
    {
      Role: 'DataBase',
      course: 'MongoDB'
    },

  ]
  return (
    <div className="App">

      <Greet name='naveen' age={24} isLoggedIn={false} />

      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='error' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to tinny</Heading>
      </Oscar>
      <Greet name='naveen' isLoggedIn={true} />
      <Button handleclick={(event) => alert('button clicked' + event)} />
      <Input value='' handleChange={(event) => { console.log(event) }} />
      <Array items={course} />

    </div>

  );
}

export default App;
