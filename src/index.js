import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom/client';
import { Header } from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'
import RestaurentMenu from './components/RestaurentMenu';
// import Grocery from './components/Grocery';

const Grocery = lazy(() => 
  import('./components/Grocery')
)

const AppLayout = () => {
    return (
        <div className="app">
        <Header />
        <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: (
        <Suspense fallback={<h1>loading......</h1>}><Grocery /></Suspense>
        )
      },
      {
        path: "/restaurent/:restId",
        element: <RestaurentMenu />
      }
    ],
    errorElement: <Error />
  }
]);
  
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
      <RouterProvider router={appRouter} />
);