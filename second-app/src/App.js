import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About';
import Contant from './components/Contant';
import Footer from './components/Footer';
import NotFound from './components/NotFound';


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

    path: "/contact",
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
