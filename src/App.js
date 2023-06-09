import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import Header from './components/Header/Header';
import TodoList from './pages/TodoList/TodoList';
import Login from './pages/Login/Login';
// import { useSelector } from 'react-redux';

function App() {
  // const dataTodoRedux = useSelector((state) => state.todo.todo);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
