import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ListPage from './pages/ListPage/ListPage'
import { Layout, RequireAuth } from './pages/Layout/Layout'
import SinglePage from './pages/SinglePage/SinglePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ProfileUpdatePage from './pages/ProfileUpdatePage/ProfileUpdatePage'
import NewPostPage from './pages/NewPostPage/NewPostPage'
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from './lib/loaders'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/list',
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: '/:id',
          element: <SinglePage />,
          loader: singlePageLoader,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
      ],
    },
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        {
          path: '/profile',
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: '/profile/update',
          element: <ProfileUpdatePage />,
        },
        {
          path: '/add',
          element: <NewPostPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
