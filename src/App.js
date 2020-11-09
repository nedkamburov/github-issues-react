import React, { useState } from 'react';
import './reset.css';
import './App.css';
import Form from './Components/Form';
import Issues from './Components/Issues';

function App() {
  const [issues, populateIssues] = useState([]);

  return (
    <div className="App">
      <div className="wrapper">
        <Form getIssuesData={(data) => populateIssues(data)} />
        <Issues issues={issues} />
      </div>
    </div >
  );
}

export default App;
