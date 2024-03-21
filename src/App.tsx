import Home from "./Pages/home";
import NotFound from "./error/NotFound";
import Root from "./routes/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BlurProvider } from "./context/BlurProvider";

// Components
import About from "./Pages/about";
import Experience from "./Pages/experience";
import Projects from "./Pages/projects";
import Contact from "./Pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "experience", element: <Experience /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return (
    <BlurProvider>
      <RouterProvider router={router} />
    </BlurProvider>
  );
}
