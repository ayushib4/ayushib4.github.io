import React from 'react';
import ReactDOM from 'react-dom';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/home';
import './index.css';
import ProjectPage from './pages/projects';
import 'bootstrap/dist/css/bootstrap.min.css';



const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" errorElement={<HomePage/>}>
    <Route index element={<HomePage/>} errorElement={<HomePage/>}/>
    <Route path="/projects" element={<ProjectPage/>} errorElement={<ProjectPage/>}/>,
  </Route>
))

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
  document.getElementById('root')
);