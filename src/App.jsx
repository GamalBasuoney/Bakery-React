import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayOut from './LayOut/LayOut';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';


const routes = createBrowserRouter([{
  path: '/', element: <LayOut />, children: [
    { index: true, element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'contact', element: <Contact /> },
    // { path: '*', element: <NotFound /> }


  ]

}]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
