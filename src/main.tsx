import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Clubs from './pages/Clubs'
import ClubDetail from './pages/ClubDetail'
import Announcements from './pages/Announcements'
import Events from './pages/Events'
import About from './pages/About'
import Contact from './pages/Contact'
import SubmitClub from './pages/SubmitClub'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'announcements', element: <Announcements /> },
      { path: 'events', element: <Events /> },
      { path: 'clubs', element: <Clubs /> },
      { path: 'clubs/:slug', element: <ClubDetail /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'submit', element: <SubmitClub /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
