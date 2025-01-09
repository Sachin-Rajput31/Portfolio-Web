import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'



import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Skills from './components/Home/Skills/Skills.jsx'
import SignIn from './components/SignIn/SignIn.jsx'

 const router = createBrowserRouter([

  {
    path: '/',
    element :<Layout/>,
    children : [
      
      {
        path: "/",
        element: <Home />,
      },
      

      {
        path:'signin',
        element:<SignIn/>
      },
      {

        path:"about",
        element: <About/>
      },
      {

        path:"contact",
        element: <Contact/>
      },
      {

        path:"user/:userid",
        element: <User/>
      },
      {

        path:"github",
        element: <Github/>
      },
      {
        path: "github",
        element: <Github />,
        loader: githubInfoLoader, 
      },
      

      {

        path:"skills",
        element: <Skills/>
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <RouterProvider router={router} />
  </StrictMode>,
)
