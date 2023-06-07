import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import Header from './components/Header/Header';
import TodoList from './pages/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
