import Home from '../pages/Home/Home';
import User from '../pages/User/User';
import TodoList from '../pages/TodoList/TodoList';
import Login from '../pages/Login/Login';

const publicRoutes = [{ path: '/', component: Home }];

const privateRoutes = [
  { path: '/user', component: User },
  { path: '/todo', component: TodoList },
  { path: '/login', component: Login },
];

export { publicRoutes, privateRoutes };
