import { route } from '@aurelia/router-lite';
import { Home } from './home/home';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';

@route({
  routes: [
    {
      path: ['', 'home'],
      component: Home,
      title: 'Home'
    },
    {
      path: 'about',
      component: About,
      title: 'About'
    },
    {
      path: 'notfound',
      component: NotFound,
      title: 'Not found',
      nav: false,       // <-- exclude from navigation model
    },
  ],
  fallback: 'notfound',
})
export class MyApp {}
