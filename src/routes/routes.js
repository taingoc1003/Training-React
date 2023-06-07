import Home from '../pages/Home/Home';
import User from '../pages/User/User';
import TodoList from '../pages/TodoList/TodoList';

const publicRoutes = [{ path: '/', component: Home }];

const privateRoutes = [
  { path: '/user', component: User },
  { path: '/todo', component: TodoList },
];

export { publicRoutes, privateRoutes };
