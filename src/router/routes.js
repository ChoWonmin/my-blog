import Components from '../components/components';
import Editor from '../components/editor';
import Signin from '../components/signIn';
import PostList from '../components/postList';

export default [
  {
    path: '/components',
    name: 'components',
    component: Components,
  },
  {
    path: '/editor',
    name: 'editor',
    component: Editor,
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin,
  },
  {
    path: '/',
    name: 'postList',
    component: PostList,
  },
  {
    path: '*',
    redirect: '/',
  },
];
