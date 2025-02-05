import Message from './messege';
import './App.css';
import ListGroup from './components/ListGroup';

function App() {
  const lebron = 'Lebron'
  return (
    <div>
      <Message name={lebron}></Message>
      <ListGroup/>
    </div>
  );
}

export default App;
