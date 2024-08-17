import { route } from '@aurelia/router-lite';
import { Home } from './home/home';
import { About } from './about/about';

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
    }
  ]
})
export class MyApp {}
