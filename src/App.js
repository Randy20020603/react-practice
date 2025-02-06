import Message from './components/messege';
import './App.css';
import ListGroup from './components/ListGroup';
import Student from './components/Students';
import UserGreeting from './components/UserGreeting';
import Football from './components/football';
import MyForm from './components/Form';

function App() {
  const lebron = 'Lebron'
  return (
    <div>
      <Message name={lebron}></Message>
      <ListGroup/>
      <Student name="Jason Tatum" age = {26} isStudent = {false}></Student>
      <Student name="Ja Morrant" age = {24} isStutent = {true}></Student>
      <Student name="Julien Zwiers" age = {21} isStutent = {true}></Student>
      <Student></Student>
      <UserGreeting isLoggedIn= {false}></UserGreeting>
      <Football></Football>
      <MyForm></MyForm>
    </div>
  );
}

export default App;
