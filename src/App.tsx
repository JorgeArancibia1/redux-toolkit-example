import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Email } from './components/Email';
import { Header } from './components/Header';
import { addUser } from './redux/userSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)))
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, [dispatch]);

  return <div className='App'>
    <Header />
    <Email />
  </div>
}

export default App
