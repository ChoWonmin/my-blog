/**
 * Created by hyunwoo on 2017-08-31.
 */
import Page1 from '../components/page1';
import Page2 from '../components/page2';

export default [
  {
    path: '/',
    name: 'page1',
    component: Page1,
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2,
  },
  {
    path: '*',
    redirect: '/',
  },
];
