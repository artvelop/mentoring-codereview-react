import BottomNavigationFooter from '@components/layout/bottomNavigationFooter';
import { Home } from '@pages/Home';

import Error404 from './Error/error404';

const router = [
  {
    path: '/',
    element: <BottomNavigationFooter />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/like',
        element: <Home />,
      },
    ],
  },
  {
    path: '/*',
    element: <Error404 />,
  },
];

export default router;
