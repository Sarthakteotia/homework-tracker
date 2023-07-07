import logo from './logo.svg';
import './App.css';
import AssignmentForm from './components/AssignmentForm';
import AssignmentList from './components/AssignmentList';

function App() {
  return (
    <div>
      <h1>Homework Tracker</h1>
      <AssignmentForm />
      <AssignmentList />
    </div>
  );
}

export default App;
