import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About';
import Contant from './components/Contant';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Courses from './components/Courses';


const router = createBrowserRouter([
  {

    path: "/about",
    element: <>
    <Navbar />
    <About/>
    <Footer />
    </>

  },
  {

    path: "/contact/:id",
    element:  <>
    <Navbar />
    <Contant/>
    <Footer />


    </>


  },
  {
    path: "/",
    element: <>
      <Navbar />
      <Footer />
    </>
  },
  {

    path: "/courses",
    element: <>
    <Navbar />
    <Courses/>
    <Footer />
    </>

  },

  {
    path: "*",
    element:
    <NotFound/>
  }
])


function App() {
  return (
    <div >

      {<RouterProvider router={router} />}


    </div>
  );
}

export default App;
