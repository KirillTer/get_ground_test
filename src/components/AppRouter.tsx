import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import Books from "../pages/books/Books";
import RootBoundary from "../pages/errorPage/ErrorPage";

export enum RouteNames {
  HOME = '/books/:pageNum',
  ANY_PATH = '*'
}
  
const AppRouter = () => {

  const publicRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <RootBoundary />,
      children: [
        {
          index: true,
          element: <Navigate to="/books/1" replace={true} />,
        },
        {
          path: RouteNames.HOME,
          element: <Books />
        },
        {
          path: RouteNames.ANY_PATH,
          element: <RootBoundary />
        },
      ],
    }
  ]);

  return (
    <RouterProvider router={publicRouter} />
  );
}
 
export default AppRouter;