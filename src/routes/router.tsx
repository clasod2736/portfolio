import Root from "./Root";
import Home from "../Pages/home";
import About from "../Pages/about";
import Contact from "../Pages/contact";
import Experience from "../Pages/experience";
import Projects from "../Pages/projects";
import NotFound from "../error/NotFound";

const routerConfig = [
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/experience", element: <Experience /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];
export default routerConfig;
