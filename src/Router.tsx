import BottomNavigationFooter from '@components/layout/bottomNavigationFooter';
import { Home } from '@pages/Home';

import Error404 from './Error/error404';
import Reserve from '@pages/Reserve';
import { Like } from '@pages/Like';

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
        element: <Like />,
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
