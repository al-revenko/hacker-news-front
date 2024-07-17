import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ROUTES from '~/const/routes';
import Home from '~/pages/Home';
import Article from '~/pages/Article';
import NotFound from '~/pages/NotFound';

const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.ARTICLE,
    element: <Article />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const Router = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Router;
