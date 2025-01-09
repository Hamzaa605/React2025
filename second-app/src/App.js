import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About';
import Contant from './components/Contant';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Courses from './components/Courses';
import CourseItem from './components/CourseItem';
import GitHubCard from './components/GitHubCard';


const router = createBrowserRouter([
  {

    path: "/about",
    element: <>
      <Navbar />
      <About />
      <Footer />
    </>

  },
  {

    path: "/contact/:id",
    element: <>
      <Navbar />
      <Contant />
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
      <Courses />
      <Footer />
    </>,
    children: [{
      index:true,
      element:<>
      <CourseItem id={1} name="web designing" fees={20000} />
      <CourseItem id={2} name="Foundation with sql" fees={25000} />
      <CourseItem id={3} name="Java Working with API" fees={30000} />
      </>
    },
      {
      path: "web-designing",
      element: <CourseItem id={1} name="web designing" fees={20000} />
    }, {
      path: "sql",
      element: <CourseItem id={2} name="Foundation with sql" fees={25000} />
    }, {
      path: "java",
      element: <CourseItem id={3} name="Java Working with API" fees={30000} />
    }]

  },
  {
    path:"/github-card",
    element:<GitHubCard/>
  },

  {
    path: "*",
    element:
      <NotFound />
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
