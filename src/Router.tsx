import BottomNavigationFooter from '@components/layout/bottomNavigationFooter';
import { Home } from '@pages/Home';

import Error404 from './Error/error404';
import Reserve from '@pages/Reserve';

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
    path: '/reserve/:id',
    element: <Reserve />,
  },
  {
    path: '/*',
    element: <Error404 />,
  },
];

export default router;
