
import './App.css';
import DisplayName from './components/DisplayName';
import EvenOdd from './components/EvenOdd';
import LoggedIn from './components/LoggedIn';
import Student from './components/Student';


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Header/> */}
      <EvenOdd/>
      <DisplayName/>
      <LoggedIn/>
      <Student id={101} name="Rayyan"/>
      <Student id={102} name="Faiz"/>
    </div>
  );
}

export default App;
